import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving=false){
    let props = {
        course: {}, 
        saving: saving,
        errors:{},
        onSave:()=>{},
        onChange:()=>{}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm{...props}/>);
    let output = renderer.getRenderOutput();

    return{
        props,
        output,
        renderer
    };
}   

/* Withou enzyme */
describe('CourseForm via React Test Utils', ()=>{
    it('renders form and h1',() => {
        const {output} = setup();
        expect(output.type).toBe('form');
        let [ h1 ] = output.props.children;//takes first elemen and give it variable name h1.
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        const { output } = setup(false);
        const submitButton = output.props.children[5];//5th element is input save
        expect(submitButton.props.value).toBe('Save');
    });
    
    it('save button is labeled "Saving..." when saving', () => {
        const { output } = setup(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
});