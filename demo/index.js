
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title Icon
 * @description 在iuap字符库，`type`参数值均以-分隔。
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="tinper-icon-demo">
				<ul className="icon_lists">
					<li>
						<Icon type="uf-arrow-down-2"/> 
						<div className="fontclass">uf-arrow-down-2</div>
					</li>
					<li>
						<Icon type="uf-download"/> 
						<div className="fontclass">uf-download</div>
					</li>
				</ul>
			</div>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" Icon","code":"/**\n * @title Icon\n * @description 在iuap字符库，`type`参数值均以-分隔。\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"tinper-icon-demo\">\n\t\t\t\t<ul className=\"icon_lists\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-down-2\"/> \n\t\t\t\t\t\t<div className=\"fontclass\">uf-arrow-down-2</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-download\"/> \n\t\t\t\t\t\t<div className=\"fontclass\">uf-download</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" 在iuap字符库，`type`参数值均以-分隔。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
