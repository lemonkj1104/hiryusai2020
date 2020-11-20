function isLoggedIn(){
	const token = store.get('token');
    if (!token){
		alert('認証コードが必要です。');
        window.location.replace("../auth");
    } 
    document.documentElement.classList.remove('no-js');
}