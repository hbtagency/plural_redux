import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage course Page', () =>{
    it('sets error message when trying to save empty title',()=>{
        const wrapper = mount(<ManageCoursePage allAuthors={[]}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
    });
});