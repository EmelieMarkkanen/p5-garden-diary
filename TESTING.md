Back to [README](README.md)

# Manual testing
**Following tests have been done manually and passed.**

## Sign up
- Page features a form for signing up to Garden Diaries.
- Filling out a valid form posts the data to the API and creates a new user.
- Filling out a valid form redirects the user to the Sign in page.
- Filling out an invalid form notifies the user what changes they need to make.
- The form is fully responsive to different screen sizes.
- The form features a link to the sign in form, redirecting users to the sign in page.

## Sign in
- Page features a form for signing in to Garden Diaries.
- Filling out a valid forms let the user sign in and redirects the user to the home page with a signed in view.
- Filling out an invalid form notifies the user what changes they need to make.
- The form is fully responsive to different screen sizes.
- The form features a link to the sign up page, redirecting users to the sign up page. 

## Navbar

### Non authorized user
- The navbar features links to the Sign in and Sign up pages.
- The links redirect the user to the chosen page.
- The navbar is responsive and collapses to a burger menu on smaller screens. 

### Authorized user
- When the user is signed in, the navbar features links to `Add a diary entry`, `Shoppinglist`, `To-do list`, `My plants`, `Following`, `Liked entries` and `Sign out`, as well as the users avatar profile image and username, linking to the users profile page.
- All links redirect the user to the chosen page. 
- The navbar is responsive and collapses to a burger menu on smaller screens. 

## Home page 

### Jumbotron
- The jumbotron with a welcome message is displayed to non authorized users. 
- The jumbotron features a link to the sign up page that redirects the user to the sign up form.
- The jumbotron is hidden for signed in users. 

### Popular profiles
- Avatar and username of users with the most followers are displayed on the home page, followed page, liked entries page and profile page.
- A `Follow`/`Unfollow` button is displayed next to the avatar and username, to signed in users.
- The `Follow`/`Unfollow` button is hidden from non authorized users.
- When clicked, the `Follow`/`Unfollow` button changes dynamically.
- When clicked, the `Follow`/`Unfollow` button updates the follow and following count of both users. 
- The component collapse and display the mobile version on smaller screens. 

### Post feed
- Diary posts made by all users are displayed on the home page, sorted by latest creation date. 
- The feed features infinite scrolling, letting the user continue to scroll through content as long as there is any. 

### Diary entries
- The posts feature the avatar and username of the post owner, which when clicked redirect the user to the profile of the owner.
- The post features a like icon in shape of a heart, that when clicked increase the like count and saves the entry to the Liked entries page.
- The post features a comment icon, that when clicked redirects the user to a detailed view of the post.
- The detailed view of a post lets the user access the commentfield. 
- The detailed view of a post lets the post owner access the dropdown menu, redirecting the user to the post edit form or letting the user delete a post.
- When the delete icon is clicked the user is notified with a message, asking if the user want to delete the post. If confirmed, the post is deleted from the website and the API.

## Add a diary entry
- The user can access the form to post a diary entry through the link in the navbar.
- The form features image upload functionality. The image upload field lets the user upload an image.
- When an image have been added the the image upload field a button is displayed, letting the user reupload a different image if they want to change it.
- The Title field lets the user add a title to the post.
- The Notes field lets the user add a text to the post.
- The form feature a post and cancel button.
- When the Post button is clicked the form is submitted and the data saved to the api backend. 
- When the Cancel button is clicked the user is redirected to the previous page.

## Edit a diary entry 
- When clicking the edit icon in the post page dropdown menu the user is redirected to the post edit page.
- The form is prepopulated with the data from the original post.
- The form lets the user upload a different image. 
- The form lets the user edit the title and text fields.
- The edit form feature a save updates and cancel button.
- When submitted by clicking the save updated button, the post data is sent to the backend API and updated.
- When clicking the cancel button the user is redirected back to the post page. 

## Profile
- The user can access their own profile by clicking on their own avatar or username in the navbar, or wherever it's displayed on the website.
- Users can access other users profile by clicking on the avatar or username in the navbar, or wherever it's displayed on the website.
- The profile page display the amount of followers, following and posts.
- The profile page display a dropdown menu, redirecting the user to the username edit, password edit or profile edit page, accessible to the profile owner. 
- The profile page display all the posts by the user, sorted by latest created at the top. 
- The profile post feed features infinite scrolling, letting the user continue to scroll through content as long as there is any.

## Edit profile
- The profile page display a dropdown menu, redirecting the user to the username edit, password edit or profile edit page, accessible to the profile owner.
- The Edit profile link redirects the user to the edit profile form, where the user can update their bio and upload a profile image.
    - Submitting the bio and image form the data is sent and updated in the API.
    - Clicking the cancel button redirects the user back to the previous page.
- The Change username link redirects the user to the edit username form, prepopulated with the users username. 
    - Empty edit username form can't be submitted.
    - User can't change to a username that already exist, and are notified if they try to submit an invalid form.
    - Clicking the cancel button redirects the user back to the previous page.
- The change password link redirects the user to the edit password form.
    - Empty edit password form can't be submitted.
    - User cant submit an invalid password, and is notified with a message if they try. 
    - Clicking the cancel button redirects the user back to the previous page.
    
## Searchbar
- A searchbar is featured on the home page, `Shoppinglist`, `To-do list`, `My plants`, `Following`, `Liked entries` and `Profile page`.
- The searchbar on each page lets the user query for posts relevant to the specific page.
- If no matching query is found the page displays a message and image from the Asset component to inform the user of this. 

## Commentfield
- The post detail page feature a commentfield. 
- The commentfield feature a submit button. 
- When submitted the new comment is saved to the backend API and displayed underneath the commentfield. 
- Empty commentfields can not be submitted.
- When a comment is posted the comment count on the post is increased.
- When a comment is deleted the comment count on the post is decreased.
- When posted, owner can access the dropdown menu to edit or delete a comment.
- When the delete icon is clicked the comment post is deleted both on the website and in the database.
- When the edit icon is clicked the comment edit field is displayed, prepopulated with the comment text. 
- When the edit field is submitted, the post is updated and saved to the API.
- When the cancel button in the edit field is clicked the comment edit field is closed and no changes are made to the API data.

## Following
- Diary posts made by users that are followed by the signed in user displayed on the Followed page, sorted by latest creation date. 
- The feed features infinite scrolling, letting the user continue to scroll through content as long as there is any.
- A `Follow`/`Unfollow` button is displayed next to the avatar and username on the profile page and in the popular profiles component, available to signed in users.
- The `Follow`/`Unfollow` button is hidden from non authorized users.
- When clicked, the `Follow`/`Unfollow` button changes dynamically.
- When clicked, the `Follow`/`Unfollow` button updates the follow and following count of both users.

## Liked entries
- Diary posts liked by the signed in user is displayed on the Liked entries page, sorted by latest creation date.
- The feed features infinite scrolling, letting the user continue to scroll through content as long as there is any.
- If the user unlikes a post it is removed from the Liked entries page.

## My Plants

### Plants
- Plants posted by the signed in user is displayed on the My plants page, only accessible by the owner.
- The My plants page display the plants posted by the user.
- The plant page feature a button redirecting the user to the post plant form. 
- The plant cards display the image, name and planted date.
- When clicking the plant card the user is redirected to the detailed plant page. 
- The detailed plant page displayes the image, name, planted date, care instructions and plant type. 
- The detailed view of a plant lets the post owner access the dropdown menu, redirecting the user to the plant edit form or letting the user delete a post.
- When the edit icon is clicked the user is redirected to the plant edit form. 
- When the delete icon is clicked the user is notified with a message, asking if the user want to delete the plant. If confirmed, the post is deleted from the website and the API. 

### Add plants form
- The user can access the form to post a plant from the button on the plants page.
- The form features image upload functionality. The image upload field lets the user upload an image.
- When an image have been added to the image upload field a button is displayed, letting the user reupload a different image if they want to change it.
- The Name field lets the user add the name of the plant.
- The Care instructions field lets the user add a text to the post.
- The Plant type drop down menu lets the user choose what kind of plant it is.
- The Planted date field lets the user add when the plant was planted. 
- The form feature a post and cancel button.
- When the Post button is clicked the form is submitted and the data saved to the api backend. 
- When the Cancel button is clicked the user is redirected to the previous page.

### Edit plants form
- When clicking the edit icon in the post page dropdown menu the user is redirected to the plant edit page.
- The form is prepopulated with the data from the original post.
- The form lets the user upload a different image. 
- The form lets the user edit the name, care instructions, type and date fields.
- The edit form feature a save updates and cancel button.
- When submitted by clicking the save updated button, the post data is sent to the backend API and updated.
- When the cancel button is clicked the user is redirected back to the post page.

## To-do list

### To-do
- Tasks posted by the signed in user is displayed on the To-do list page, only accessible by the owner.
- The To-do list page only display the tasks posted by the user.
- The To-do page feature a button redirecting the user to the post task form. 
- The task cards display the image, title and due date and a check icon to set the task as done.
- If the task is overdue a red exclamation icon is displayed on the card.
- When clicking the task card the user is redirected to the detailed task page. 
- The detailed task page display the image, title, due date and description.
- If the task is overdue the detailed task page display the text "Task is overdue!"
- The detailed view of a task lets the post owner access the dropdown menu, redirecting the user to the plant edit form, letting the user delete a post or set the task as done.
- When the edit icon is clicked the user is redirected to the task edit form. 
- When the delete icon is clicked the user is notified with a message, asking if the user want to delete the task. If confirmed, the post is deleted from the website and the API. 
- When the check icon is clicked the user is notified with a message, asking if the task is done. If confirmed, the post is deleted from the website and the API.

### Add task form
- The user can access the form to post a task from the button on the To-do page.
- The form features image upload functionality. The image upload field lets the user upload an image.
- When an image have been added to the image upload field a button is displayed, letting the user reupload a different image if they want to change it.
- The Title field lets the user add a title for the task.
- The Desciption field lets the user add a text to the post.
- The Due date date field let the user set the due date for the task.
- The form feature a post and cancel button.
- When the Post button is clicked the form is submitted and the data saved to the API backend. 
- When the Cancel button is clicked the user is redirected to the previous page.

### Edit task form
- When clicking the edit icon in the post page dropdown menu the user is redirected to the task edit page.
- The form is prepopulated with the data from the original post.
- The form lets the user upload a different image. 
- The form lets the user edit the title, description and due date fields.
- The edit form feature a save updates and cancel button.
- When submitted by clicking the save updated button, the post data is sent to the backend API and updated.
- When the cancel button is clicked the user is redirected back to the post page.

## Shoppinglist

### Item list
- The shopping list page display a list of the items added by the signed in user, only accessible by the owner.

### Add item form
- The form lets the users add an item and it's quantity. 
- The quantity of an item cannot go below 1.
- An empty form can't be submitted, user is notified by a message if they try to submit an empty form field.
- The form feature an add item and cancel button.
- Submitting the form save the data to the API and update the list.
- Clicking the cancel button empty the form fields.

### Edit/delete item form
- Each item in the list feature a dropdown menu to edit and delete an item.
- When the edit icon is clicked the item edit field is displayed, prepopulated with the item text. 
- When the edit field is submitted, the post is updated and saved to the API.
- When the cancel button in the edit field is clicked the item edit field is closed and no changes are made to the API data.

## Asset component
- The asset spinner is displaying when loading data from the API on all pages where it's been imported.
- The asset message is displaying as expected on all pages where it's been imported.
- The asset image is displaying as expected on all pages where it's been imported.

## Hooks

### Overdue check hook
- The overdue check hook update the task card to display the task overdue icon and text. 

### Use click outside hook
- The use click outside hook let the user close the navbar hamburger menu when clicking outside of it. 

### Use redirect hook
- The use redirect hook redirects the user as expected where used.

