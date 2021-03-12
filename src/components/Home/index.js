import React from "react";
import "./style.scss";

export default class Home extends React.Component {
  componentDidMount() {
    const video = document.getElementById("video");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function (err) {
        console.log("An error occurred: " + err);
      });
  }

  TakeSnap = (e) => {
    e.preventDefault();
    this.takepicture();
  };

  takepicture = () => {
    let canvas = document.createElement("canvas");
    const video = document.getElementById("video");
    let context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 300, 150);
    var data = canvas.toDataURL("image/png");
    localStorage.setItem('imageUrl', data);
    this.props.history.push('filter');
  };

  render() {
    return (
      <div className="camera-Component">
        <div className="videoStream">
          <video id="video"></video>
        </div>
        <div className="snap-button">
          <button onClick={(e) => this.TakeSnap(e)} id="startbutton"></button>
        </div>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}
