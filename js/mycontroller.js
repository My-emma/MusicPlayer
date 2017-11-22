angular.module('mycontroller', ['ui.router'])
	.factory('clickFn', function($q){
		return{
			data: [
				{name:"排骨教主 - 白石溪", img:"img/3.jpg", src:"mp3/排骨教主 - 白石溪.mp3"},
				{name:"CLOUDWANG - 全部都是你", img:"img/4.jpg", src:"mp3/CLOUDWANG - 全部都是你.mp3"},
				{name:"Matteo - Panama", img:"img/5.jpg", src:"mp3/Matteo - Panama.mp3"},
				{name:"陈一发儿 - 童话镇", img:"img/6.jpeg", src:"mp3/陈一发儿 - 童话镇.mp3"},
				{name:"金志文 - 远走高飞", img:"img/7.jpg", src:"mp3/金志文 - 远走高飞.mp3"},
				{name:"校长 - 带你去旅行", img:"img/8.jpg", src:"mp3/校长 - 带你去旅行.mp3"}
			],
			num:0,
			music:{name:"排骨教主 - 白石溪", img:"img/3.jpg", src:"mp3/排骨教主 - 白石溪.mp3"},
			next:function(){
				this.num++;
				if(this.num > 5){
					this.num = 0;
				}
				this.music = this.data[this.num];
			},
			prev:function(){
				this.num--;
				if(this.num < 0){
					this.num = 5;
				}
				this.music = this.data[this.num];
			}
		}
	})
	.controller('mycon', function($scope, clickFn, $timeout){
		$scope.flag = false;
		$scope.music = clickFn.music;
		// 暂停播放
		$scope.show = function(){
			$scope.flag = !$scope.flag;
			if($scope.flag){
				$('audio')[0].play();
			} else {
				$('audio')[0].pause();
			}
		}
		// 下一曲
		$scope.next = function(){
			clickFn.next();
			fn();
		}
		// 上一曲
		$scope.prev = function(){
			clickFn.prev();
			fn();
		}
		function fn(){
			$scope.flag = true;
			$scope.music = clickFn.music;
			$timeout(function(){
				$('audio')[0].play();
			},0);
		}
	})