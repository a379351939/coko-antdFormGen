import React from 'react'
import ReactDOM from 'react-dom'
// import AntdFromGen, {Field} from './App'
import AntdFromGen, {Field} from 'coko-antdformgen'
import { Form, Button } from 'antd';
import 'antd/dist/antd.css';


function App() {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
      ],
    },
  ];

  const fieldsDef:Field[] = [{
    type: 'input',
    label: 'test',
    name: 'test',
    rules:[{required: true}]
  },{
    type: 'select',
    label: 'test2',
    name: 'test2',
    selectData: [{
      title: 'aa',
      value: 'aa',
    },{
      title: 'bb',
      value: 'bb',
    }],
  },{
    type: 'checkTree',
    label: 'test3',
    name: 'test3',
    treeData:treeData,
    rules:[{required: true}]
  },{
    type: 'selectTree',
    label: 'test4',
    name: 'test4',
    treeData:treeData,
  }]


  const [form] = Form.useForm()

  const onFill = () => {
    form.setFieldsValue({
      test: 'test',
      test2: 'test2',
      test3: ["0-0"],
      test4: ["0-0"],
    });
  }

  return (
    <div style={{ width: 300, marginLeft: 60, marginTop: 30 }}>
      <AntdFromGen fieldsDef={fieldsDef} form={form} onFinish={v=>{console.log(v)}} {...layout} />
      <Button onClick={()=>{form.submit()}}>提交</Button>
      <Button onClick={onFill} style={{ marginLeft: 10 }}>fill Form</Button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
