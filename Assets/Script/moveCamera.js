#pragma strict
//using UnityEngine;
//using System.Collections;
//using System.Collections.Generic;
//using System.Linq;

class moveCamera extends MonoBehaviour {
    public var RotateSpeed = 0.1f;
    public var UpDownSpeed = 0.01f;

	function Start () {
//		Debug.Log("sajkdflksjfk");
	}
	var rotatetarget:Transform;
	var xspeed:float = 80;
	var yspeed:float = 80;
	public var mousePosText : UI.Text;

	private var sx:float;
	private var sy:float;
	private var dx:float;
	private var dy:float;
	private var tx:float;
	private var ty:float;

	function Update() {
		MouseEvent();
		TapEvent();
	}

	function MouseEvent(){
		//Start
		if(Input.GetMouseButtonDown(0)) {
			//Input Mouse position
			sx = Input.mousePosition.x;
			sy = Input.mousePosition.y;
			mousePosText.text = sx.ToString() + " ： " + sy.ToString();

		}
		//Drag
		if(Input.GetMouseButton(0)) {
			dx = Input.mousePosition.x;
			dy = Input.mousePosition.y;
			tx = sx - dx;
			ty = sy - dy;

			//Rotate!
			rotatetarget.Rotate( ty / yspeed , tx / xspeed , 0);
		}

	}

	function TapEvent(){
		if(0 < Input.touchCount){
			if(Input.GetTouch(0).phase == TouchPhase.Began){
				sx = Input.GetTouch(0).position.x;
				sy = Input.GetTouch(0).position.y;
				mousePosText.text = sx.ToString() + " ： " + sy.ToString();
			}
			if(Input.GetTouch(0).phase == TouchPhase.Moved){
				//タッチ/タップしたまま動かした
				dx = Input.GetTouch(0).position.x;
				dy = Input.GetTouch(0).position.y;
				tx = sx - dx;
				ty = sy - dy;

				//Rotate!
				rotatetarget.Rotate( ty / yspeed , tx / xspeed , 0);
			}
			if(Input.GetTouch(0).phase == TouchPhase.Ended){
				//タッチ/タップを離した
			}
		}
	}

}