#Step 1: Generate a View

In addition to generating a new project, the Adaptive.js Generator has a view generator that sets up a new view for your project. The view generator creates:
* a view file,
* a Dust template,
* a view-script file, and
* a view test file.

### Install NPM Modules

1. In your `workshop--adaptivejs-site` project folder, enter the following command to install NPM modules:

    ```
    npm install
    ```

##Task

###Create a New 'category' View

1. In your `workshop--adaptivejs-site` project folder, enter the following command to run the sub-generator with Yeoman:

    ```
    yo adaptivejs:view
    ```

2. When the generator prompts you for a name, enter `category`.
3. Select `baseView` as the view to extend.

    ![View Generator](https://s3.amazonaws.com/uploads.hipchat.com/15359/58442/CCZL4KBrKEO5dLW/Screen%20Shot%202015-11-06%20at%204.26.35%20PM.png)

4. To add the view to the router file, open the file `app/global/router.js` with a text editor.

5. In `router.js` file, in the `define` dependencies array code block, add the new `pages/category/category-view` path for the new view file. Remember to append a comma the previous `page/home/view` last entry.

    <img src="/static/img/define-dependencies.png?raw=true" height="100" />

6. In the function definition, list the view `Category` as an argument after the `Home` argument. Remember to append the comma after `Home`.

    <img src="/static/img/home-argument.png?raw=true" height="100" />

7. Remove the default calls to `router.add()` and replace them with the following lines of code:

    ```javascript
    router
        .add(Router.selectorMatch('body.home'), Home)
        .add(Router.selectorMatch('body.category'), Category);
    ```

    The `.add()` function creates a new route that loads the given view upon the return of a Boolean value from the function. The `Router.selectorMatch()` function returns true when an element that matches the selector exists on the current page.

8. Save the `router.js` file with these changes in your editor.

    Your `router.js` file should look like this:

    ![Router Final](https://s3.amazonaws.com/uploads.hipchat.com/15359/58442/ujvAAPk9Cp4dn65/Screen%20Shot%202015-11-06%20at%204.43.53%20PM.png)

9. Back in the command line, enter the `grunt preview` command to start the browser preview.
10. Work through the [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project) tutorial.
    Use the `http://training.merlinspotions.com/potions` URL for the site.

    A page that is similar to the Merlin's Potions homepage appears but with content from the category page included under the header.

11. To stop the preview, enter `[control] c` on the command line.

##Continue to Step 2

When you're ready to continue to Step 2, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-2-populate-category-page
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-2-populate-category-page/README.md) for the Step 2 branch.
