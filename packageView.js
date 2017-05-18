/**
 * Created by LinChuQiang.
 */

// 关于process.env，阅读《npm scripts 使用指南》
// http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html?utm_source=tuicool&utm_medium=referral

console.log(process.env.npm_package_name)
console.log(process.env.npm_package_version)
console.log(process.env.npm_config_report)
console.log(process.env.NODE_ENV)
console.log(process.env)

// npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，比如pretest、test、posttest等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的npm scripts命令编写代码。
var TARGET = process.env.npm_lifecycle_event
console.log(TARGET)

/* cmd -> node -> console.log(process.env);
 {
 PROMPT: '$P$G',
 USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-I4E28RD',
 LOCALAPPDATA: 'C:\\Users\\LinChuQiang\\AppData\\Local',
 NVM_SYMLINK: 'C:\\Program Files\\nodejs',
 PROCESSOR_LEVEL: '6',
 USERDOMAIN: 'DESKTOP-I4E28RD',
 LOGONSERVER: '\\\\DESKTOP-I4E28RD',
 JAVA_HOME: 'C:\\Program Files\\Java\\jdk1.8.0_91',
 SESSIONNAME: 'Console',
 ALLUSERSPROFILE: 'C:\\ProgramData',
 PROCESSOR_ARCHITECTURE: 'AMD64',
 PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules',
 SystemDrive: 'C:',
 OneDrive: 'C:\\Users\\LinChuQiang\\OneDrive',
 APPDATA: 'C:\\Users\\LinChuQiang\\AppData\\Roaming',
 USERNAME: 'LinChuQiang',
 'ProgramFiles(x86)': 'C:\\Program Files (x86)',
 CommonProgramFiles: 'C:\\Program Files\\Common Files',
 Path: 'C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\Sys
 tem32\\WindowsPowerShell\\v1.0\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\Git\\cmd;O:\\AaL
 JQPC\\nvm;C:\\Program Files\\nodejs;O:\\AaLJQPC\\TortoiseSVN\\bin;C:\\Ruby23-x64\\bin;C:\\ProgramData\\Oracle\\Java\\javapath;C
 :\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files
 (x86)\\NVIDIA Corporation\\PhysX\\Common;O:\\AaLJQPC\\nvm;C:\\Program Files\\nodejs',
 PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW',
 OS: 'Windows_NT',
 COMPUTERNAME: 'DESKTOP-I4E28RD',
 NVM_HOME: 'O:\\AaLJQPC\\nvm',
 PROCESSOR_REVISION: '3c03',
 CommonProgramW6432: 'C:\\Program Files\\Common Files',
 ComSpec: 'C:\\Windows\\system32\\cmd.exe',
 ProgramData: 'C:\\ProgramData',
 ProgramW6432: 'C:\\Program Files',
 HOMEPATH: '\\Users\\LinChuQiang',
 SystemRoot: 'C:\\Windows',
 TEMP: 'C:\\Users\\LINCHU~1\\AppData\\Local\\Temp',
 HOMEDRIVE: 'C:',
 PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 60 Stepping 3, GenuineIntel',
 USERPROFILE: 'C:\\Users\\LinChuQiang',
 TMP: 'C:\\Users\\LINCHU~1\\AppData\\Local\\Temp',
 'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
 ProgramFiles: 'C:\\Program Files',
 PUBLIC: 'C:\\Users\\Public',
 NUMBER_OF_PROCESSORS: '8',
 windir: 'C:\\Windows'
 }
 * */
