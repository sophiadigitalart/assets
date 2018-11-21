/*{
	"CREDIT" : "fftMatrixProduct by Unknown",
	"CATEGORIES" : [
		"ci"
	],
	"DESCRIPTION": "",
	"INPUTS": [
		{
			"NAME": "inputImage",
			"TYPE" : "image"
		},
		{
			"NAME": "iZoom",
			"TYPE" : "float",
			"MIN" : 0.0,
			"MAX" : 1.0,
			"DEFAULT" : 1.0
		},
		{
			"NAME": "iSteps",
			"TYPE" : "float",
			"MIN" : 2.0,
			"MAX" : 75.0,
			"DEFAULT" : 19.0
		},
		{
			"NAME" :"iMouse",
			"TYPE" : "point2D",
			"DEFAULT" : [0.0, 0.0],
			"MAX" : [640.0, 480.0],
			"MIN" : [0.0, 0.0]
		},
		{
			"NAME": "iColor", 
			"TYPE" : "color", 
			"DEFAULT" : [
				0.9, 
				0.6, 
				0.0, 
				1.0
			]
		}
	],
}
*/
void mainImage(void){vec2 uv = fragCoord.xy / RENDERSIZE.xy;uv = abs(2.0*(uv - 0.5));vec4 t1 = IMG_THIS_PIXEL(inputImage, vec2(uv[0], 0.1));vec4 t2 = IMG_THIS_PIXEL(inputImage, vec2(uv[1], 0.1));float fft = t1[0] * t2[0];fragColor = vec4(sin(fft*3.141*2.5), sin(fft*3.141*2.0), sin(fft*3.141*1.0), 1.0);}void main(void) { mainImage(gl_FragColor, gl_FragCoord.xy); }