/**
 * nodejs 练习
 */
import xlsx from "xlsx";
import { fileURLToPath } from "url";
import path, { resolve } from "path";
import fs from "fs/promises";
import fsDefault, { Dirent } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取xlsx表格数据
function readFile(FilePath: string) {
  const xlsxContent = xlsx.readFile(FilePath);
  const sheetName = xlsxContent.SheetNames[0];
  let currentData = xlsxContent.Sheets[sheetName];
  currentData = xlsx.utils.sheet_to_json(currentData);
  currentData = currentData.map((n) => {
    return n.projectName;
  });
  console.log(currentData);
}
// readFile(resolve(__dirname, "..", "..", "file", "project-review.xlsx"));

// 读取json数据
async function readJson(FilePath: string) {
  const jsonContentInfo = await fs.readFile(FilePath, "utf-8");
  console.log(jsonContentInfo);
  return jsonContentInfo;
}

// 写入json数据
async function writeJson(FilePath: string) {
  const jsonData = await readJson(
    resolve(__dirname, "..", "..", "file", "sub-file", "read.json")
  );
  fs.writeFile(FilePath, jsonData, "utf-8");
}

// 递归遍历目录文件 读取目录下所有文件内容 并输出显示
async function traveseDictFile(FilePath: string) {
  const fileObj = await fs.stat(FilePath);
  if (fileObj.isFile()) {
    return;
  }
  const files: Array<Dirent> = [];
  async function readDir(currentPath: string) {
    const items = await fs.readdir(currentPath, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        await readDir(path.join(currentPath, item.name));
      }
      if (item.isFile()) {
        files.push(item);
      }
    }
  }
  await readDir(FilePath);
  const jsonStrArr: Array<Object> = [];
  files.forEach((l) => {
    if (l.name.endsWith("json")) {
      let jsonContentInfo = fsDefault.readFileSync(
        path.join(l.parentPath, l.name),
        "utf-8"
      );
      jsonContentInfo = JSON.parse(jsonContentInfo);
      jsonStrArr.push(jsonContentInfo);
    }
  });
  console.log(JSON.stringify(jsonStrArr));
}

// 创建目录并复制文件
async function dirCreateAndCopy(sourcePath: string, filePath: string) {
  async function copyDir(source, dest) {
    await fs.mkdir(dest, { recursive: true });
    const originFiles = await fs.readdir(source, { withFileTypes: true });
    originFiles.forEach(async (n) => {
      const srcPath = path.join(source, n.name);
      const destPath = path.join(dest, n.name);
      if (n.isDirectory()) {
        copyDir(srcPath, destPath);
      }
      if (n.isFile()) {
        await fs.copyFile(srcPath, destPath);
      }
    });
  }
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    copyDir(sourcePath, filePath);
  }
}

dirCreateAndCopy(
  resolve(__dirname, "..", "..", "file", "sub-file"),
  resolve(__dirname, "..", "..", "file", "copy-file")
);
