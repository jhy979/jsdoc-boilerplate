/**
 * vendingMachine 클래스
 * @constructor
 * @augments {number} 따듯한 아메리카노 재고
 * @augments {number} 아이스 아메리카노 재고
 * @augments {number} 따듯한 아메키라노 판매 개수
 * @augments {number} 아이스 아메키라노 판매 개수
 */
 class vendingMachine {}

 /**
	* 900원 이하의 금액이면 따뜻한 아메리카노를 반환한다.
	* @param {number} 투입금액
	* @return {boolean} 따뜻한 아메리카노를 살 수 있다면 true
	*/
 vendingMachine.prototype.canBuyHotCoffee = function(투입금액){
	 return 
 }
 
 /**
	* 1000원 이상의 금액이면 아이스 아메리카노를 반환한다.
	* @param {number} 투입금액
	* @return {boolean} 아이스 아메리카노를 살  수 있다면 true
	*/
 vendingMachine.prototype.canBuyIceCoffee = function(투입금액){
	 return 
 }
 
 /**
	* 핫, 아이스 커피 타입 중 재고가 남아 있어서 살수 있는지를 boolean으로 반환한다.
	* @param {string} coffeType - 핫, 아이스 커피 타입
	* @return {boolean} - 재고가 남아 있어서 살 수 있다면 true 
	*/
 vendingMachine.prototype.canBuyCoffee = function(coffeType){
	 return;
 }
 
 /**
	* 투입 금액으로 어떤 커피를 살 수 있는지 판단하여 콘솔 출력
	* @param {number} 투입금액
	* @return {void} console.log()
	*/
	vendingMachine.prototype.getItem = function (투입금액) {
	 return;
 };