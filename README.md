#Step 2: Populate the Category View with Content

Now that the new view works, let's add content to it. Currently the contents of the body tag for the desktop page are included on the page but we don't need all of the original contents for the adapted site.

##Task

###Add Content to the Category View

There are two main elements to pull into our view:

* the page title, and 
* the list of products.
 
Start with the HTML definition for the page in the template file. Then in the view file, select the elements on the desktop site to add to the template.

1. In Terminal, ensure you are in your `workshop--adaptivejs-site` directory. There, enter the following command to start the preview:

    ```
    grunt preview
    ```

2. In your browser, [Preview the Adaptive.js Site](http://docs.mobify.com/v1.0/docs/preview-your-project).

    Use `http://www.merlinspotions.com/potions` as the site URL.

    As you change the category template and view files, refresh the preview page in the browser to see the changes.

3. Launch an editor app. In the `adaptation/views` folder, open the `category.js` category view file.

    As you remember from the [Overview of the Mobify Bundle](http://docs.mobify.com/v1.0/docs/the-mobify-bundle/#views) guide, the view file is where you select and transform content from the original page.

4. In the `context` section of the file, remove the `body` key.
5. In `context` object of the view file, add the `title` key with the following code snippet:

 ```javascript
    title: function() {
        return $('.title');
    }
 ```

 This selects and returns an item with the `title` class.

6. Underneath the `title` key, add the `listing` key that returns an element with the `category-listing` class with the following code snippet:

    ```javascript
    title: function() {
        return $('.title');
    },
    listing: function() {
        return $('.category-listing');
    }
    ```
 Ensure that replace the entire code snippet with the one above, including the `,` comma character after the `title` block.

7. Save and close the `category.js` view file in your editor.

    Your `category.js` file should look like this:

    ![Category View Final](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/55p5oVUIFiTduTJ/Screen%20Shot%202015-03-12%20at%204.31.59%20PM.png)

8. In the editor, from the `adaptation/templates` folder, and open the `category.dust` template file.

    As you remember from the [Overview of the Mobify Bundle](http://www.merlinspotions.com/potions/), the template file defines the layout of your page on mobile. Each template uses the content from its corresponding view. This is why the `category.js` and `category.dust` files have parallel name structure.

9. In the `category.dust` template file, erase the contes of the `contentBlock` key to override it from its default in `base.dust`. 

    ![Override the contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/XQKwUSv5WGo064c/Screen%20Shot%202015-01-16%20at%2012.15.59%20PM.png)

    As you remember from the Step 1 branch, the new view extends the base view. This means that the category template uses all of the mark up from the base dust file. By default, the base simply displays the full contents of the desktop HTML.

    ![Base template contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/Hehqa43UYdVBQxW/Screen%20Shot%202015-02-05%20at%201.41.56%20PM.png)

    When you override the `contentBlock` key, you can add your own markup that is specific to this new page. For more information, view our documentation on [view inheritance](https://cloud.mobify.com/docs/adaptivejs/adapting/views/#/view-inheritance/) and [block overrides](http://docs.mobify.com/v1.0/docs/dustjs-cheat-sheet/#h-block-overrides-override-).

10. In the `contentBlock` key, add the two `title` and `listing` keys that you defined in the corresponding view file:

    ```
    {<contentBlock}
        {title}
        {listing}
    {/contentBlock}
    ```

11. Save the `category.dust` template file and close it.

    Your `category.dust` file should look like this:

    ![Category Dust Final](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/nF4HlNrhtHjDZh3/Screen%20Shot%202015-03-12%20at%204.34.21%20PM.png)

12. [Preview the Adaptive.js Site](http://docs.mobify.com/v1.0/docs/preview-your-project), with the URL `http://www.merlinspotions/potions` for the category product listing page.

    A page similar to the one in the previous step appears but now only with the title and listing as contents.

13. Stop the preview with the `[control] c` command on the command line.

##Continue to Step 3

Once you set up the category view, add some styling to it. Run the following command to move on:

```
git reset --hard HEAD && git clean -df && git checkout step-3-style-category-page
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-3-style-category-page/README.md) in the Step 3 branch.
