/**
 * nodejs 练习
 */
import xlsx from "xlsx";
import { fileURLToPath } from "url";
import path, { resolve } from "path";
import fs from "fs/promises";

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

// 递归遍历目录文件
function traveseDictFile(FilePath: string) {}

writeJson(resolve(__dirname, "..", "..", "file", "sub-file", "write.json"));
