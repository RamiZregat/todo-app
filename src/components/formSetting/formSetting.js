import React, { useContext, useState } from "react";
import { FormGroup, InputGroup, Switch,Intent,Colors } from "@blueprintjs/core";
import { ListContext } from "../setting/setting";
import "./formSetting.scss";

 function formSetting (props) {
  const { setPostsPerPage,postsPerPage,displayCompleted,displayCompletedItems } = useContext(ListContext);
  function submit(e){
    e.preventDefault();
    let value=e.target.select.value;
    setPostsPerPage(value)
    localStorage.setItem('savedPostsPerPage',value)
    console.log(localStorage.getItem("savedPostsPerPage"));

  }
  return (
    <div>
      <h1 id="heading">Setting</h1>
      <form onSubmit={submit} className="settingForm">
        <FormGroup>
        <h4 className='formItems'>Change Setting</h4>
          <FormGroup
          className='formItems'
            labelFor="text-input"
            required="true"
          >
            <div class="bp3-html-select bp3-fill ">
              <select name='select'defaultValue={3}>
                <option selected >
                  Choose the number of To-Do tasks in single page
                </option>
                <option value="2">Two</option>
                <option value="4">four</option>
                <option value="6">Six</option>
                <option value="8">Eight</option>
              </select>
              <span class="bp3-icon bp3-icon-double-caret-vertical"></span>
            </div>
          </FormGroup>
          <FormGroup
          className='formItems'
            label="Display completed items"
            labelFor="text-input"
          >
            <Switch checked={displayCompleted===false} label="Public" onChange={displayCompletedItems} />
      
          </FormGroup>
          <FormGroup className='formItems'>
          <InputGroup style={{background: "rgb(0 117 255)", color:"white"}} type="submit"  value='Save Setting'/>
        </FormGroup>
        </FormGroup>
      </form>
    </div>
  );
}

export default formSetting;
