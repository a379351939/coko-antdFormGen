import React, {ReactChild} from 'react'
import { Form, Input, Select, FormInstance, FormProps, FormItemProps, Tree } from 'antd';

const { Option } = Select

interface TreeNode {
  title: string,
  key: string | number,
  disabled?: boolean,
}

interface OptionProps {
  disabled?: boolean,
  title: string,
  value: string,
}

export interface Field extends FormItemProps{
  type: 'input' | 'select' | 'checkTree' | 'selectTree' | 'custom',
  compOption?: object,
  custom?:ReactChild,
  selectData?:OptionProps[],
  treeData? :TreeNode[]
}

interface FormGenProps extends FormProps{
  fieldsDef: Field[],
  form: FormInstance,
}

const formItemConfig = {
  checkTree: {
    valuePropName: 'checkedKeys',
    trigger: 'onCheck',
    validateTrigger: 'onCheck',
  },
  selectTree: {
    valuePropName: 'selectedKeys',
    trigger: 'onSelect',
    validateTrigger: 'onSelect',
  },
  select: {
    valuePropName: 'value',
    trigger: 'onChange',
    validateTrigger: 'onChange',
  },
  input: {
    valuePropName: 'value',
    trigger: 'onChange',
    validateTrigger: 'onChange',
  }
}

function App(props: FormGenProps) {
  const {fieldsDef } = props

  const renderFormItems = () => fieldsDef.map((item) => {
    const {custom, type} = item

    if(custom) return custom

    return (
      <Form.Item valuePropName={formItemConfig[type].valuePropName}
                 trigger={formItemConfig[type].trigger}
                 validateTrigger={formItemConfig[type].validateTrigger}
                 {...item}  >
        {renderTypeComp(item)}
      </Form.Item>
    )
  })

  const renderTypeComp = (item:Field) => {
    const {compOption, type, selectData = [], treeData = []} = item
    switch (type) {
      case "input":
        return <Input {...compOption} />
      case "select":
        return (
          <Select {...compOption} >
            {selectData?.map(item => (
              <Option {...item} >
                {item.title}
              </Option>
            ))}
          </Select>
        )
      case "checkTree":
        return (
          <Tree {...compOption} treeData={treeData} checkable  />
        )
      case "selectTree":
        return (
          <Tree {...compOption} treeData={treeData}   />
        )
    }
  }

  return (
    <Form {...props} >
      {renderFormItems()}
    </Form>
  )
}

export default App
