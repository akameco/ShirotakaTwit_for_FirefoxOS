$(document).on('click', '#mentionlink', function(){
	localStorage.setItem("loading",1);
});
$(document).on('click', '#homelink', function(){
	localStorage.setItem("loading",1);
});
$(document).on('click', '.newPostButton', function(){
	document.querySelector('#newTweetSection').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
});
$(document).on('click', '#backButton', function(){
	document.querySelector('#newTweetSection').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});
$(document).on('click', '.updateButton', function(){
	getHomeTimeline();
});
$(document).on('click', '#mentionupdateButton', function(){
	getMentionTimeline();
});

$(document).on('click', '#statusUpdateButton', function(){
	newTweetPost();
	document.form1.postform.value = "";
	document.form2.my_file.value = "";
	document.querySelector('#newTweetSection').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});
$(document).on('click', '#clearImage', function(){
	document.form2.my_file.value = "";
});

//メニューを開いた時の処理
$(document).on('click', '.menu-button', function() {
	$(".icon-bookmark").attr('id', $(this).attr('id'));
	$(".icon-calllog-incomingsms").attr('id', $(this).attr('id'));
	$(".icon-calllog-incomingsms").attr('data-name', $(this).attr('data-name'));
	$(".icon-sync").attr('id', $(this).attr('id'));
});
//メニューを閉じた時の処理
$(document).on('click', '.icon-closecancel', function(){
	$(".icon-bookmark").attr('id', "");
	$(".icon-calllog-incomingsms").attr('id', "");
	$(".icon-calllog-incomingsms").attr('data-name', "");
	$(".icon-sync").attr('id', "");
});


//リプ
$(document).on('click', '.repform', function(){
	var repId = "";
	repId = $(this).attr('id');
	var repName = $(this).attr('data-name');
	replyCreate(repId, repName);
});
//リプ用のボタン
$(document).on('click', '#replyUpdateButton', function(){
	var repId = document.getElementById("replyUpdateButton").className;
	replyTweetPost(repId);
	document.form1.postform.value = "";
	document.form2.my_file.value = "";
	document.querySelector('#newTweetSection').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
	$("#replyUpdateButton").attr('id', "statusUpdateButton");
	$("#replyBackButton").attr('id', "backButton");
});
$(document).on('click', '#replyBackButton', function(){
	document.form1.postform.value = "";
	document.querySelector('#newTweetSection').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
	$("#replyUpdateButton").attr('id', "statusUpdateButton");
	$("#replyBackButton").attr('id', "backButton");
});

//リツイート
$(document).on('click', '.icon-sync', function(){
	var rtId = "";
	rtId = $(this).attr('id');
	rtCreate(rtId);
	utils.status.show('リツイートしました');
});

//ふぁぼ
$(document).on('click', '.icon-bookmark', function(){
	var favId = "";
	favId = $(this).attr('id');
	favoriteCreate(favId);
	utils.status.show('お気に入りに追加しました');
});

