#pragma strict
//using UnityEngine;
//using System.Collections;
//using System.Collections.Generic;
//using System.Linq;

class moveCamera extends MonoBehaviour {
    public var RotateSpeed = 0.1f;
    public var UpDownSpeed = 0.01f;

	function Start () {
		Debug.Log("sajkdflksjfk");
	}
	var rotatetarget:Transform;
	var xspeed:float = 100;
	var yspeed:float = 100;

	private var sx:float;
	private var sy:float;
	private var dx:float;
	private var dy:float;
	private var tx:float;
	private var ty:float;

	function Update() {

		//Start
		if(Input.GetMouseButtonDown(0)) {
			//Input Mouse position
			sx = Input.mousePosition.x;
			sy = Input.mousePosition.y;
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

}
