// 1. get the api's entry point
var midiremote_api = require('midiremote_api_v1')

// 2. create the device driver main object
var deviceDriver = midiremote_api.makeDeviceDriver('Icon', 'QCon Pro G2 Test', 'Nerseth')

// 3. create objects representing the hardware's MIDI ports
var midiInput = deviceDriver.mPorts.makeMidiInput()
var midiOutput = deviceDriver.mPorts.makeMidiOutput()

// 4. define all possible namings the devices MIDI ports could have
deviceDriver
    .makeDetectionUnit()
    .detectPortPair(midiInput, midiOutput)
    .expectInputNameContains('iCON QCON Pro G2')
    .expectOutputNameContains('iCON QCON Pro G2')

var surface = deviceDriver.mSurface

function makeSurfaceElements() {
	var surfaceElements = {}

	surfaceElements.pushEncoder12 = surface.makePushEncoder(0, 3, 2, 2)
	surfaceElements.pushEncoder12.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 16)
	surfaceElements.pushEncoder12.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 32)
	surfaceElements.pushEncoder17 = surface.makePushEncoder(2, 3, 2, 2)
	surfaceElements.pushEncoder17.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 17)
	surfaceElements.pushEncoder17.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 33)
	surfaceElements.pushEncoder22 = surface.makePushEncoder(4, 3, 2, 2)
	surfaceElements.pushEncoder22.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 18)
	surfaceElements.pushEncoder22.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 34)
	surfaceElements.pushEncoder27 = surface.makePushEncoder(6, 3, 2, 2)
	surfaceElements.pushEncoder27.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 19)
	surfaceElements.pushEncoder27.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 35)
	surfaceElements.pushEncoder32 = surface.makePushEncoder(8, 3, 2, 2)
	surfaceElements.pushEncoder32.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 20)
	surfaceElements.pushEncoder32.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 36)
	surfaceElements.pushEncoder37 = surface.makePushEncoder(10, 3, 2, 2)
	surfaceElements.pushEncoder37.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 21)
	surfaceElements.pushEncoder37.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 37)
	surfaceElements.pushEncoder42 = surface.makePushEncoder(12, 3, 2, 2)
	surfaceElements.pushEncoder42.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 22)
	surfaceElements.pushEncoder42.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 38)
	surfaceElements.pushEncoder47 = surface.makePushEncoder(14, 3, 2, 2)
	surfaceElements.pushEncoder47.mEncoderValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 23)
	surfaceElements.pushEncoder47.mPushValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 39)
	surfaceElements.button52 = surface.makeButton(0, 5, 2, 2)
	surfaceElements.button52.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 0)
	surfaceElements.button56 = surface.makeButton(2, 5, 2, 2)
	surfaceElements.button56.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 1)
	surfaceElements.button60 = surface.makeButton(4, 5, 2, 2)
	surfaceElements.button60.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 2)
	surfaceElements.button64 = surface.makeButton(6, 5, 2, 2)
	surfaceElements.button64.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 3)
	surfaceElements.button68 = surface.makeButton(8, 5, 2, 2)
	surfaceElements.button68.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 4)
	surfaceElements.button72 = surface.makeButton(10, 5, 2, 2)
	surfaceElements.button72.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 5)
	surfaceElements.button76 = surface.makeButton(12, 5, 2, 2)
	surfaceElements.button76.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 6)
	surfaceElements.button80 = surface.makeButton(14, 5, 2, 2)
	surfaceElements.button80.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 7)
	surfaceElements.button84 = surface.makeButton(0, 7, 2, 2)
	surfaceElements.button84.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 8)
	surfaceElements.button88 = surface.makeButton(2, 7, 2, 2)
	surfaceElements.button88.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 9)
	surfaceElements.button92 = surface.makeButton(4, 7, 2, 2)
	surfaceElements.button92.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 10)
	surfaceElements.button96 = surface.makeButton(6, 7, 2, 2)
	surfaceElements.button96.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 11)
	surfaceElements.button100 = surface.makeButton(8, 7, 2, 2)
	surfaceElements.button100.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 12)
	surfaceElements.button104 = surface.makeButton(10, 7, 2, 2)
	surfaceElements.button104.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 13)
	surfaceElements.button108 = surface.makeButton(12, 7, 2, 2)
	surfaceElements.button108.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 14)
	surfaceElements.button112 = surface.makeButton(14, 7, 2, 2)
	surfaceElements.button112.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 15)
	surfaceElements.button116 = surface.makeButton(0, 9, 2, 2)
	surfaceElements.button116.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 16)
	surfaceElements.button120 = surface.makeButton(2, 9, 2, 2)
	surfaceElements.button120.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 17)
	surfaceElements.button124 = surface.makeButton(4, 9, 2, 2)
	surfaceElements.button124.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 18)
	surfaceElements.button128 = surface.makeButton(6, 9, 2, 2)
	surfaceElements.button128.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 19)
	surfaceElements.button132 = surface.makeButton(8, 9, 2, 2)
	surfaceElements.button132.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 20)
	surfaceElements.button136 = surface.makeButton(10, 9, 2, 2)
	surfaceElements.button136.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 21)
	surfaceElements.button140 = surface.makeButton(12, 9, 2, 2)
	surfaceElements.button140.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 22)
	surfaceElements.button144 = surface.makeButton(14, 9, 2, 2)
	surfaceElements.button144.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 23)
	surfaceElements.button148 = surface.makeButton(0, 11, 2, 2)
	surfaceElements.button148.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 24)
	surfaceElements.button152 = surface.makeButton(2, 11, 2, 2)
	surfaceElements.button152.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 25)
	surfaceElements.button156 = surface.makeButton(4, 11, 2, 2)
	surfaceElements.button156.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 26)
	surfaceElements.button160 = surface.makeButton(6, 11, 2, 2)
	surfaceElements.button160.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 27)
	surfaceElements.button164 = surface.makeButton(8, 11, 2, 2)
	surfaceElements.button164.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 28)
	surfaceElements.button168 = surface.makeButton(10, 11, 2, 2)
	surfaceElements.button168.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 29)
	surfaceElements.button172 = surface.makeButton(12, 11, 2, 2)
	surfaceElements.button172.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 30)
	surfaceElements.button176 = surface.makeButton(14, 11, 2, 2)
	surfaceElements.button176.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 31)
	surfaceElements.button180 = surface.makeButton(0, 14, 2, 1)
	surfaceElements.button180.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 104)
	surfaceElements.button184 = surface.makeButton(4, 14, 2, 1)
	surfaceElements.button184.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 106)
	surfaceElements.button188 = surface.makeButton(6, 14, 2, 1)
	surfaceElements.button188.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 107)
	surfaceElements.button192 = surface.makeButton(8, 14, 2, 1)
	surfaceElements.button192.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 108)
	surfaceElements.button196 = surface.makeButton(10, 14, 2, 1)
	surfaceElements.button196.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 109)
	surfaceElements.button200 = surface.makeButton(12, 14, 2, 1)
	surfaceElements.button200.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 110)
	surfaceElements.button204 = surface.makeButton(14, 14, 2, 1)
	surfaceElements.button204.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 111)
	surfaceElements.button208 = surface.makeButton(16, 14, 2, 1)
	surfaceElements.button208.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 112)
	surfaceElements.fader212 = surface.makeFader(0, 15, 2, 10).setTypeVertical()
	surfaceElements.fader212.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(0)
	surfaceElements.fader215 = surface.makeFader(2, 15, 2, 10).setTypeVertical()
	surfaceElements.fader215.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(1)
	surfaceElements.fader218 = surface.makeFader(4, 15, 2, 10).setTypeVertical()
	surfaceElements.fader218.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(2)
	surfaceElements.fader221 = surface.makeFader(6, 15, 2, 10).setTypeVertical()
	surfaceElements.fader221.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(3)
	surfaceElements.fader224 = surface.makeFader(8, 15, 2, 10).setTypeVertical()
	surfaceElements.fader224.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(4)
	surfaceElements.fader227 = surface.makeFader(10, 15, 2, 10).setTypeVertical()
	surfaceElements.fader227.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(5)
	surfaceElements.fader230 = surface.makeFader(12, 15, 2, 10).setTypeVertical()
	surfaceElements.fader230.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(6)
	surfaceElements.fader233 = surface.makeFader(14, 15, 2, 10).setTypeVertical()
	surfaceElements.fader233.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(7)
	surfaceElements.fader236 = surface.makeFader(16, 15, 2, 10).setTypeVertical()
	surfaceElements.fader236.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToPitchBend(8)
	surfaceElements.blindPanel239 = surface.makeBlindPanel(0, 0, 16, 3)
	surfaceElements.button241 = surface.makeButton(16, 11, 2, 2)
	surfaceElements.button241.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 47)
	surfaceElements.button245 = surface.makeButton(16, 9, 2, 2)
	surfaceElements.button245.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 46)
	surfaceElements.button249 = surface.makeButton(16, 7, 2, 2)
	surfaceElements.button249.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 49)
	surfaceElements.button253 = surface.makeButton(16, 5, 2, 2)
	surfaceElements.button253.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 48)
	surfaceElements.button275 = surface.makeButton(16, 3, 2, 2)
	surfaceElements.button275.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 50)
	surfaceElements.button279 = surface.makeButton(20, 21, 2, 2)
	surfaceElements.button279.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 98)
	surfaceElements.button283 = surface.makeButton(22, 21, 2, 2)
	surfaceElements.button283.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 100)
	surfaceElements.button287 = surface.makeButton(24, 21, 2, 2)
	surfaceElements.button287.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 99)
	surfaceElements.button291 = surface.makeButton(22, 19, 2, 2)
	surfaceElements.button291.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 96)
	surfaceElements.button295 = surface.makeButton(22, 23, 2, 2)
	surfaceElements.button295.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 97)
	surfaceElements.button299 = surface.makeButton(19, 11, 2, 2)
	surfaceElements.button299.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 74)
	surfaceElements.button303 = surface.makeButton(21, 11, 2, 2)
	surfaceElements.button303.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 75)
	surfaceElements.button307 = surface.makeButton(23, 11, 2, 2)
	surfaceElements.button307.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 76)
	surfaceElements.button311 = surface.makeButton(25, 11, 2, 2)
	surfaceElements.button311.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 77)
	surfaceElements.button315 = surface.makeButton(27, 11, 2, 2)
	surfaceElements.button315.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 78)
	surfaceElements.button319 = surface.makeButton(29, 11, 2, 2)
	surfaceElements.button319.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 79)
	surfaceElements.button323 = surface.makeButton(19, 9, 2, 2)
	surfaceElements.button323.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 40)
	surfaceElements.button327 = surface.makeButton(21, 9, 2, 2)
	surfaceElements.button327.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 41)
	surfaceElements.button331 = surface.makeButton(23, 9, 2, 2)
	surfaceElements.button331.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 42)
	surfaceElements.button335 = surface.makeButton(25, 9, 2, 2)
	surfaceElements.button335.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 43)
	surfaceElements.button339 = surface.makeButton(27, 9, 2, 2)
	surfaceElements.button339.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 44)
	surfaceElements.button343 = surface.makeButton(29, 9, 2, 2)
	surfaceElements.button343.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 45)
	surfaceElements.button347 = surface.makeButton(23, 6, 2, 2)
	surfaceElements.button347.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 58)
	surfaceElements.button351 = surface.makeButton(25, 6, 2, 2)
	surfaceElements.button351.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 59)
	surfaceElements.button355 = surface.makeButton(27, 6, 2, 2)
	surfaceElements.button355.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 60)
	surfaceElements.button359 = surface.makeButton(29, 6, 2, 2)
	surfaceElements.button359.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 61)
	surfaceElements.button363 = surface.makeButton(23, 4, 2, 2)
	surfaceElements.button363.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 54)
	surfaceElements.button367 = surface.makeButton(25, 4, 2, 2)
	surfaceElements.button367.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 55)
	surfaceElements.button371 = surface.makeButton(27, 4, 2, 2)
	surfaceElements.button371.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 56)
	surfaceElements.button375 = surface.makeButton(29, 4, 2, 2)
	surfaceElements.button375.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 57)
	surfaceElements.button379 = surface.makeButton(21, 5, 2, 2)
	surfaceElements.button379.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 62)
	surfaceElements.button383 = surface.makeButton(19, 14, 2, 2)
	surfaceElements.button383.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 80)
	surfaceElements.button387 = surface.makeButton(21, 14, 2, 2)
	surfaceElements.button387.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 81)
	surfaceElements.button391 = surface.makeButton(23, 14, 2, 2)
	surfaceElements.button391.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 83)
	surfaceElements.button395 = surface.makeButton(25, 14, 2, 2)
	surfaceElements.button395.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 91)
	surfaceElements.button399 = surface.makeButton(27, 14, 2, 2)
	surfaceElements.button399.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 86)
	surfaceElements.button403 = surface.makeButton(29, 14, 2, 2)
	surfaceElements.button403.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 92)
	surfaceElements.button407 = surface.makeButton(19, 16, 2, 2)
	surfaceElements.button407.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 84)
	surfaceElements.button411 = surface.makeButton(21, 16, 2, 2)
	surfaceElements.button411.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 85)
	surfaceElements.button415 = surface.makeButton(23, 16, 2, 2)
	surfaceElements.button415.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 82)
	surfaceElements.button419 = surface.makeButton(25, 16, 2, 2)
	surfaceElements.button419.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 95)
	surfaceElements.button423 = surface.makeButton(27, 16, 2, 2)
	surfaceElements.button423.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 94)
	surfaceElements.button427 = surface.makeButton(29, 16, 2, 2)
	surfaceElements.button427.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 93)
	surfaceElements.button431 = surface.makeButton(2, 14, 2, 1)
	surfaceElements.button431.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 105)
	surfaceElements.button435 = surface.makeButton(26, 19, 2, 2)
	surfaceElements.button435.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 101)
	surfaceElements.button466 = surface.makeButton(21, 1, 2, 2)
	surfaceElements.button466.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 52)
	surfaceElements.button470 = surface.makeButton(23, 1, 2, 2)
	surfaceElements.button470.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 53)
	surfaceElements.button474 = surface.makeButton(25, 1, 2, 2)
	surfaceElements.button474.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 70)
	surfaceElements.button478 = surface.makeButton(27, 1, 2, 2)
	surfaceElements.button478.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 71)
	surfaceElements.button482 = surface.makeButton(29, 1, 2, 2)
	surfaceElements.button482.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToNote(0, 72)
	surfaceElements.knob486 = surface.makeKnob(27, 21, 4, 4)
	surfaceElements.knob486.mSurfaceValue.mMidiBinding.setInputPort(midiInput).setOutputPort(midiOutput).bindToControlChange(0, 60)

	return surfaceElements
}

var surfaceElements = makeSurfaceElements()