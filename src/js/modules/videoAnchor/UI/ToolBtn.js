/**
 * Author: DrowsyFlesh
 * Create: 2018/10/10
 * Description:
 */
import $ from 'jquery';
import React from 'react';
import styled from 'styled-components';
import {ToolContent} from './ToolContent';

const HelperBtn = styled.span`
  display: block;
  padding: 0 15px;
  border-radius: 4px;
  transition: all 0.3s;
  width: 120px;
  .func-module & {
    width: 90px;
    border: 1px solid #e5e9ef;
    &:hover {
      border-color: rgb(0, 161, 214);
    }
  }
  &:hover, &.show {
    color: rgb(0, 161, 214);
  }
`;

export class ToolBtn extends React.Component {
    constructor(props) {
        super(props);
        this.show = false;
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.show) {
            this.show = false;
            $('.bilibili-helper-content').css({visibility: 'hidden'});
        } else {
            this.show = true;
            $('.bilibili-helper-content').css({visibility: 'visible'});
        }
    };

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <link href="//at.alicdn.com/t/font_862696_227xf8jklcw.css" type="text/css" rel="stylesheet"/>
                <HelperBtn onClick={this.handleClick}>
                    <span title="哔哩哔哩助手">哔哩哔哩助手</span>
                </HelperBtn>
                <ToolContent/>
            </React.Fragment>
        );
    }
}