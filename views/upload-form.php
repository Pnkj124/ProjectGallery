<?php   

    return"
    <h1>Upload new jpg images</h1>
    <form method= 'post' action='index.php?page=upload' enctype='multipart/form-data'>
        <label> Find a jpg image to upload </label>
        <input type='file' name='image-data' accept='image/jpeg' />
        <input type='submit' value= 'upload' name ='new-image' />
        </form>";