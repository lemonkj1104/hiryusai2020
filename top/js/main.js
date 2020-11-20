function isLoggedIn(){
	const token = store.get('token');
    alert("isloggedin init");
    document.documentElement.classList.remove('no-js');
    if (!token){
		alert('no token');
        window.location.replace("../auth");
    	} 
}