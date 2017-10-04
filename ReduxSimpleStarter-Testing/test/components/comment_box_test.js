import { renderComponent, expect } from './../test_helper';
import CommentBox from './../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  // run before any of our statement and it's going to run before each of them runs.
  // 所以總共呼叫 3 次
  beforeEach(() => {
    // actually return jquery obj
    component = renderComponent(CommentBox);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exit;
  });

  it('has a button', () => {
    expect(component.find('textarea')).to.exit;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });
    it('shows that text the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
