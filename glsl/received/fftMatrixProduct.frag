/* fftMatrixProduct */
#version 150
// shadertoy specific
uniform vec3      	iResolution; 			// viewport resolution (in pixels)
uniform float     	iTime; 			        // shader playback time (in seconds)
uniform vec4      	iMouse; 				// mouse pixel coords. xy: current (if MLB down), zw: click
uniform sampler2D 	iChannel0; 				// input channel 0
uniform sampler2D 	iChannel1; 				// input channel 1
uniform sampler2D 	iChannel2; 				// input channel 2
uniform sampler2D 	iChannel3; 				// input channel 3
uniform vec4      	iDate; 					// (year, month, day, time in seconds)
// videodromm specific
uniform vec3        iBackgroundColor;    	// background color
uniform vec3        iColor;              	// color
uniform int         iSteps;              	// steps for iterations
uniform float       iRatio;
uniform vec2        iRenderXY;           	// move x y
uniform float       iZoom;               	// zoom
uniform float       iCrossfade;          	// CrossFade 2 shaders
uniform float       iAlpha;          	  	// alpha
uniform bool        iFlipH;					// flip horizontally
uniform bool        iFlipV;					// flip vertically
uniform float       iFreq0;              // sound
uniform float       iFreq1;              // sound
uniform float       iFreq2;              // sound
uniform float       iFreq3;              // sound
uniform vec3 		spectrum;              // sound
uniform int         iInvert;           		// 1 for color inversion
uniform float		iFps;

out vec4 fragColor;
vec2  fragCoord = gl_FragCoord.xy; // keep the 2 spaces between vec2 and fragCoord
float time = iTime;
void main(void){vec2 uv = gl_FragCoord.xy / iResolution.xy;uv = abs(2.0*(uv - 0.5));vec4 t1 = texture2D(iChannel0, vec2(uv[0], 0.1));vec4 t2 = texture2D(iChannel0, vec2(uv[1], 0.1));float fft = t1[0] * t2[0];gl_FragColor = vec4(sin(fft*3.141*2.5), sin(fft*3.141*2.0), sin(fft*3.141*1.0), 1.0);}