uniform float uTime;
uniform float uSize;

attribute float aScale;
attribute vec3 aVelocity;

varying vec3 vPosition;
varying vec2 vUv;
varying float vProgress;

void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    float progress = fract(uTime * 0.1 + aScale);
    
    pos += aVelocity * progress * 5.0;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * aScale * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    vProgress = progress;
}

