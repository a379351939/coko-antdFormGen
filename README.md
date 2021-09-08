# coko-antdFormGen
### 介绍
一个根据字段生成Antd表单的React组件。
本组件更多是提供封装思路，具体的表单组件还需要根据实际业务调整。

### 使用

```
npm i coko-flv'
```
```
import AntdFromGen, {Field} from 'coko-antdformgen'
import { Form, Button } from 'antd';

function App() {
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
    }],
  }]

  const [form] = Form.useForm()

  return (
      <div>
          <AntdFromGen fieldsDef={fieldsDef} form={form} onFinish={v=>{console.log(v)}}  />
          <Button onClick={()=>{form.submit()}}>提交</Button>
      </div>
  );
}
```

### API
```
// 继承antd Form
interface FormGenProps extends FormProps{
  fieldsDef: Field[],
  form: FormInstance,
}

// 继承 antd FormItem
interface Field extends FormItemProps{
  type:  'input' | 'select' | 'checkTree' | 'selectTree' ｜ 'custom',
  compOption?: object,
  custom?:ReactChild,
  selectData?:OptionProps[],
  treeData? :TreeNode[]
}

```
#####FormGen
| 参数  | 说明  |  类型 |  默认值 |  
|---|---|---|---|
| fieldsDef  | 渲染组件的数据  |  Field[] |   |  
|  form |  antdForm实例  | FormInstance  |   | 
#####Field
| 参数  | 说明  |  类型 |  默认值 |  
|---|---|---|---|
| type  | 渲染组件的类型 | 'input'｜'select'｜'checkTree'｜'selectTree'｜'custom' |  
|  compOption |  赋在组件上的props  | object  |    |
| custom | 自定义渲染组件 | ReactChild |   |
| selectData | 使用Select组件时Option的数据 | OptionProps | 
| treeData  | 使用Tree组件时TreeNode数据 | TreeNode |
