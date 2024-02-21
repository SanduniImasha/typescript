import {Member} from './member'; 
import { jsonFileUrl } from './config';

export async function getUsersFromJsonFile(): Promise<Member[]> {
    
    let data: any;
    try{
        const response = await fetch(jsonFileUrl);
        data = await response.json();
        return data as Member[];
    }
    catch(err){
        console.error('Error reading file:', err);
        return data;
    }
    
    
}
const report = getUsersFromJsonFile();
console.log(report);
/*
import * as fs from 'fs/promises';

async function readJsonFile(filePath: string): Promise<void> {
  try {
    const data = await fs.readFile('./member.json', 'utf8');
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}
const d = './member.json';
//const filePath = './member.json';
readJsonFile(d);

/*
import * as fs from 'fs/promises';

async function readFile() {
    try {
        const data = await fs.readFile('member.json', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFile();
*/