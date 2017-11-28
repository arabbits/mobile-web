window.onload = function(){

	;(function(){

	// 需求 点击checkbox实现checked的类的切换
		var checkbox = document.querySelectorAll(".checkbox");
		var inputs = document.querySelectorAll("input[type='checkbox']")
		checkbox.forEach(function(el,index){
			el.addEventListener("click",function(){
				this.classList.toggle("checked");
			})
		})

		checkbox[0].addEventListener("click",function(){
			if (this.classList.contains("checked")) {
				for (var i = 1; i < checkbox.length; i++) {
					checkbox[i].classList.add("checked");
					inputs[i].checked = true;
				}
			}else{
				for (var i = 1; i < checkbox.length; i++) {
					checkbox[i].classList.remove("checked");
					inputs[i].checked = false;
				}
			}
		})
		//选下面 上面中
		for (var i = 1; i < checkbox.length; i++) {
			checkbox[i].addEventListener("click",function(){
				for (var j = 1; j < checkbox.length; j++) {
					if (!checkbox[j].classList.contains("checked")) {
						checkbox[0].classList.remove("checked");
						inputs[0].checked = false;
						return ;
					}
				}
					// 如果到了这一步 意味这所有的checkbox都被选中了
				checkbox[0].classList.add("checked");
				inputs[0].checked = true;	
			})
		}
	})();

	;(function(){

		// var delt = document.querySelectorAll(".del-t");
		var del = document.querySelectorAll(".del");
		var modal = document.querySelector(".modal");
		var cancel = document.querySelector(".cancel");
		var delt = null;
		for (var i = 0; i < del.length; i++) {
			del[i].addEventListener("click",function(){
				var delt = this.querySelector(".del-t");
				delts = delt;
				modal.style.display = "block";
				delt.style.transform = "rotate(-15deg) translateX(-5px)";
			})
		}
		cancel.addEventListener("click",function(){
			modal.style.display = "none";
			delts.style.transform = "none";
		})
	})();


	;(function(){

		// 点击加减的效果
		var add = document.querySelectorAll('.add');
		var sub = document.querySelectorAll('.sub');
		var num = document.querySelectorAll('.num');
		var modal = document.querySelector('.modal');

		for (var i = 0; i < add.length; i++) {
			add[i].addEventListener("click",function(){
				this.previousElementSibling.children[0].value++;
			})
			sub[i].addEventListener("click",function(){
				var val = this.nextElementSibling.children[0].value;
				val--;
				if (val<1) {
					val=1;
				}
				this.nextElementSibling.children[0].value = val;
			})
		}
	})();
}