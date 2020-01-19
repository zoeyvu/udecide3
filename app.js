document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    const db = firebase.firestore();
    const myPost = db.collection('post').doc('firstpost');
    myPost.onSnapshot(doc => {
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title();
    })
        
});
    
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
            //document.write("It works until this line")
            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user)
                })
    
}          

function updatePost(e) {
    constdb = firebase.firestore();
    const myPost = db.collection('post').doc('firstpost')
    myPost.update({title: e.target.value})

}


