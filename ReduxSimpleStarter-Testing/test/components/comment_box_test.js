import { renderComponent, expect } from './../test_helper';
import CommentBox from './../../src/components/comment_box';

describe('CommentBox',() => {
    it('has a correct class', () => {
        // actually return jquery obj
        const component = renderComponent(CommentBox);
        expect(component).to.have.class('comment-box');
    })

    it('has a text area', () => {
        // actually return jquery obj
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exit;
    });

    it('has a button', () => {
        // actually return jquery obj
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exit;
    });
});