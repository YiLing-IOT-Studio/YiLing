const code = {
    data: [{
        "title": "C",
        "code": "#include <stdio.h>\n\nint main()\n{\n\tprintf(\"Hello Wolrd!\"); \/\* \"Hello World!\" \*\/\n\treturn 0;\n}",
        "btn-txt": "DIY with C",
        "className": "c"
    }, {
        "title": "C++",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n\tcout << \"Hello, world!\" << endl; \/\* \"Hello World!\" \*\/\n\treturn 0;\n}",
        "btn-txt": "DIY with C++",
        "className": "cpp"
    }, {
        "title": "Java",
        "code": "public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World\"); // \"Hello World!\"\n\t}\n}",
        "btn-txt": "DIY with Java",
        "className": "java"
    }, {
        "title": "JavaScript",
        "code": "export default function (){\n\tconsole.log('Hello World!');\n}\n\nimport hello from './hello';\nhello(); // 'Hello World!'",
        "btn-txt": "DIY with JavaScript",
        "className": "javascript"
    }, {
        "title": "Python",
        "code": "def hello():\n\tprint(\"Hello World!\")\n\nhello() # \"Hello World!\"",
        "btn-txt": "DIY with Python",
        "className": "python"
    }]
};

module.exports = code;