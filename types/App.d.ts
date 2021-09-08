import { ReactChild } from 'react';
import { FormInstance, FormProps, FormItemProps } from 'antd';
interface TreeNode {
    title: string;
    key: string | number;
    disabled?: boolean;
}
interface OptionProps {
    disabled?: boolean;
    title: string;
    value: string;
}
export interface Field extends FormItemProps {
    type: 'input' | 'select' | 'checkTree' | 'selectTree';
    compOption?: object;
    custom?: ReactChild;
    selectData?: OptionProps[];
    treeData?: TreeNode[];
}
interface FormGenProps extends FormProps {
    fieldsDef: Field[];
    form: FormInstance;
}
declare function App(props: FormGenProps): JSX.Element;
export default App;
