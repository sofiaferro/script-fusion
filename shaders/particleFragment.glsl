uniform float uOpacity;

varying vec2 vUv;
varying float vProgress;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float strength = 0.05 / distanceToCenter - 0.1;
    strength = smoothstep(0.0, 1.0, strength);
    
    float alpha = strength * (1.0 - vProgress) * uOpacity;
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
}

