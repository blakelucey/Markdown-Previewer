import './App.css';
import React from 'react';
import Badge from 'react-bootstrap/Badge';
let marked = require("marked");

const initialMarkdown = `
### **Headers**

# Header 1
## Header 2
### Header 3

### **List (ordered)**

1. List item 1
2. List item 2
3. List item 3

### **List (unordered)**

- item
- item
- item

### **Blockquote**

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



### **Code Block**

\`\`\`
const x = 2
const y = 3
const z = x + y

\`\`\`

### **Inline Code**

\`const x = 2\`

### **Link**

[freeCodeCamp](https://www.freecodecamp.org/learn)

### **Image**

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: initialMarkdown,
    };
  }

  updateMarkdown(markdown){
    this.setState({markdown});
  }

  render(){
    var inputStyle = {
      width: '400px',
      height: '1000px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px'
    };

    var outputStyle = {
      width: '400px',
      height: 'auto',
      backgroundColor: '#DCDCDC',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px'
    }
  return (
    <div className='App'>
    <div className='container'>
    <div className="row mt-4">
    <div className='col text-center'>
    <h1>
      {" "}
    <Badge className='text-align-center' variant='light'>
    Markdown Previewer
    </Badge>

    </h1>

      </div>
    </div>
    <div className="row mt-4">
  <div className="col-md-6">
    {" "}
  <div className='col text-center'>
  <h4>
  <Badge className='text-align-center' variant = 'secondary'>
  Markdown Input
  </Badge>
  </h4>
<div className='mark-input'>
<textarea style = {inputStyle} className='input' id = 'editor' value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value)}}>
</textarea>
</div>
    </div>
  </div>

  <div className="col-md-6">
    {" "}
  <div className='col text-center'>
  <h4>
  <Badge className = 'text-align-center' variant = 'secondary'>
  Preview Area
  </Badge>
</h4>
  <div style={outputStyle}>
  </div>
  <div id = 'preview' style={outputStyle}
    dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {breaks: true})}}
    ></div>

    </div>
  </div>
</div>
    </div>
    </div>
  );
}}
