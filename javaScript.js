

    var config = {
    apiKey: "AIzaSyDB2Jfa-hahdubTLkvRQCp7Fk7lpKX98IU",
    authDomain: "codefundamentals-d7467.firebaseapp.com",
    databaseURL: "https://codefundamentals-d7467.firebaseio.com",
    projectId: "codefundamentals-d7467",
    storageBucket: "codefundamentals-d7467.appspot.com",
    messagingSenderId: "974539262491"
  };
  firebase.initializeApp(config);

  const captionTable = firebase.database().ref('/captionTable');

  captionTable.on('child_added', function(event){
    const id = event.key;
    const imgObj = event.val();
    console.log(id, imgObj);

    let decorator = `
    <div class="col-md-4 square" id='caption-${id}'>
      <img src='${imgObj.url}' class="img-fluid">
      <p>
      ${imgObj.caption}
      </p>
    </div>
    `;

    let imgArray = [];
    imgArray.push(imgObj);
    for(img of imgArray){
      $('#gallery').append(decorator);
    }


  $(document).ready(()=>{
    $('#img-form').submit((event)=>{
      event.preventDefault();
      const url = $('.space-url').val();
      const caption = $('.space-caption').val();

      captionTable.push({caption: caption, url: url});
      $('.space-url').val("");
      $('.space-caption').val("");
      location.reload(true);

    });
  });

  });
