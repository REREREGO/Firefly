import {test} from 'node:test';
import assert from 'node:assert/strict';
import {visitPath} from '../src/utils/visit-key.ts';
import {withoutDates} from './sync-post-dates.mjs';
test('repository rename retains per-page counter identities',()=>{
 assert.equal(visitPath('/MyBlog/posts/example/'),'/Firefly/posts/example/');
 assert.equal(visitPath('/MyBlog'),'/Firefly/');
 assert.equal(visitPath('/Firefly/posts/example'),'/Firefly/posts/example/');
 assert.equal(visitPath('/MyBlogOther/'),'/MyBlogOther/');
});
test('URL migration alone does not change article modification dates',()=>{
 const old='---\ntitle: Test\nimage: /Firefly/uploads/cover.png\npublished: null\n---\n![image](/Firefly/uploads/a.png) $x_1$';
 const next=old.replaceAll('/Firefly/','/MyBlog/');
 assert.equal(withoutDates(old),withoutDates(next));
 assert.notEqual(withoutDates(old),withoutDates(next+' actual edit'));
});
