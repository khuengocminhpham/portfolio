import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":97,"restingState":50},{"continuousParameterGroupId":"a-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":97,"restingState":50}],"createdOn":1650686191864},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-2","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"364e7ff9-1b93-e002-6d26-4f4301fdae8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"364e7ff9-1b93-e002-6d26-4f4301fdae8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-2-p","smoothing":97,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1650690947323},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2130","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2130","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1650844939262},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2141","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2141","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":99,"restingState":50},{"continuousParameterGroupId":"a-8-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":99,"restingState":50}],"createdOn":1650849873441},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2141","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2141","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650849993813},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2141","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2141","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650849993813},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1650855087461},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"364e7ff9-1b93-e002-6d26-4f4301fdae8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"364e7ff9-1b93-e002-6d26-4f4301fdae8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1650940348746},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1650941123857},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":-100,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-172":{"id":"e-172","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":-100,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":-100,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-174":{"id":"e-174","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e9482dbf-a5b0-7c64-7859-2d973b306af1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":-100,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816}},"actionLists":{"a":{"id":"a","title":"Img Hero","continuousParameterGroups":[{"id":"a-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"xValue":20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-6","selectorGuids":["65e85548-4977-984a-5e64-1588b367e712"]},"xValue":2,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-5","selectorGuids":["780a26d8-ebce-fa48-b465-f04cfc2699ef"]},"xValue":4,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-11","selectorGuids":["8642e75d-3a4f-a9f5-b891-8407eff5319e"]},"xValue":3,"zValue":null,"xUnit":"vw","yUnit":"PX","zUnit":"px"}},{"id":"a-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-7","selectorGuids":["48287b43-f534-c013-7a41-e09b31650c68"]},"xValue":2,"zValue":null,"xUnit":"vw","yUnit":"PX","zUnit":"px"}},{"id":"a-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-8","selectorGuids":["f975f26c-eaa5-c86f-cad1-2815f4bdb67e"]},"xValue":5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-3","selectorGuids":["453923e7-a672-7177-2a7f-e6392edbb0bb"]},"xValue":-2,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-1","selectorGuids":["a19752bb-e0d5-b249-241c-223ad3a03600"]},"xValue":-1,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-10","selectorGuids":["c0a4edbf-bd43-c648-03bd-2ef1a826aa3f"]},"xValue":-2,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-6","selectorGuids":["65e85548-4977-984a-5e64-1588b367e712"]},"xValue":-2,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-5","selectorGuids":["780a26d8-ebce-fa48-b465-f04cfc2699ef"]},"xValue":-4,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-11","selectorGuids":["8642e75d-3a4f-a9f5-b891-8407eff5319e"]},"xValue":-3,"zValue":null,"xUnit":"vw","yUnit":"PX","zUnit":"px"}},{"id":"a-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-7","selectorGuids":["48287b43-f534-c013-7a41-e09b31650c68"]},"xValue":-2,"zValue":null,"xUnit":"vw","yUnit":"PX","zUnit":"px"}},{"id":"a-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-8","selectorGuids":["f975f26c-eaa5-c86f-cad1-2815f4bdb67e"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-3","selectorGuids":["453923e7-a672-7177-2a7f-e6392edbb0bb"]},"xValue":2,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-30","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-1","selectorGuids":["a19752bb-e0d5-b249-241c-223ad3a03600"]},"xValue":1,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-34","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-10","selectorGuids":["c0a4edbf-bd43-c648-03bd-2ef1a826aa3f"]},"xValue":2,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"yValue":20,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-6","selectorGuids":["65e85548-4977-984a-5e64-1588b367e712"]},"xValue":null,"yValue":2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-5","selectorGuids":["780a26d8-ebce-fa48-b465-f04cfc2699ef"]},"xValue":null,"yValue":4,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-11","selectorGuids":["8642e75d-3a4f-a9f5-b891-8407eff5319e"]},"xValue":null,"yValue":3,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-7","selectorGuids":["48287b43-f534-c013-7a41-e09b31650c68"]},"xValue":null,"yValue":2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-8","selectorGuids":["f975f26c-eaa5-c86f-cad1-2815f4bdb67e"]},"xValue":null,"yValue":5,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-3","selectorGuids":["453923e7-a672-7177-2a7f-e6392edbb0bb"]},"xValue":null,"yValue":-2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-31","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-1","selectorGuids":["a19752bb-e0d5-b249-241c-223ad3a03600"]},"xValue":null,"yValue":-1,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-35","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-10","selectorGuids":["c0a4edbf-bd43-c648-03bd-2ef1a826aa3f"]},"xValue":null,"yValue":-2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"yValue":-20,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-6","selectorGuids":["65e85548-4977-984a-5e64-1588b367e712"]},"xValue":null,"yValue":-2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-5","selectorGuids":["780a26d8-ebce-fa48-b465-f04cfc2699ef"]},"xValue":null,"yValue":-4,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-11","selectorGuids":["8642e75d-3a4f-a9f5-b891-8407eff5319e"]},"xValue":null,"yValue":-3,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-7","selectorGuids":["48287b43-f534-c013-7a41-e09b31650c68"]},"xValue":null,"yValue":-2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-8","selectorGuids":["f975f26c-eaa5-c86f-cad1-2815f4bdb67e"]},"xValue":null,"yValue":-5,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-3","selectorGuids":["453923e7-a672-7177-2a7f-e6392edbb0bb"]},"xValue":null,"yValue":2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-32","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-1","selectorGuids":["a19752bb-e0d5-b249-241c-223ad3a03600"]},"xValue":null,"yValue":1,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}},{"id":"a-n-36","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".img-hero-10","selectorGuids":["c0a4edbf-bd43-c648-03bd-2ef1a826aa3f"]},"xValue":null,"yValue":2,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}}]}]}],"createdOn":1650686230750},"a-2":{"id":"a-2","title":"Block Img Hero","continuousParameterGroups":[{"id":"a-2-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"yValue":0,"zValue":null,"xUnit":"PX","yUnit":"%","zUnit":"px"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-2-n-5","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"filters":[{"type":"blur","filterId":"c425","value":0,"unit":"px"}]}},{"id":"a-2-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"yValue":-250,"zValue":null,"xUnit":"PX","yUnit":"%","zUnit":"px"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"xValue":1.3,"yValue":1.3,"locked":true}},{"id":"a-2-n-6","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"filters":[{"type":"blur","filterId":"c425","value":30,"unit":"px"}]}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".block-img-hero","selectorGuids":["26a6fcac-46b3-5c85-2f33-f26dbe50290f"]},"value":0,"unit":""}}]}]}],"createdOn":1650690951271},"a-3":{"id":"a-3","title":"Heading Hero","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-overflow-a","selectorGuids":["029b765e-926f-7052-ba82-0886e5604075"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-3-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-overflow-b","selectorGuids":["fe230f6a-0440-ef6d-1de4-d266d27bbbe1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":100,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".hero-overflow-a","selectorGuids":["029b765e-926f-7052-ba82-0886e5604075"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-3-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".hero-overflow-b","selectorGuids":["fe230f6a-0440-ef6d-1de4-d266d27bbbe1"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650844943715},"a-8":{"id":"a-8","title":"Color BG","continuousParameterGroups":[{"id":"a-8-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"globalSwatchId":"","rValue":61,"bValue":154,"gValue":87,"aValue":1}}]},{"keyframe":33,"actionItems":[{"id":"a-8-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"globalSwatchId":"","rValue":61,"bValue":154,"gValue":121,"aValue":1}}]},{"keyframe":66,"actionItems":[{"id":"a-8-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"globalSwatchId":"","rValue":194,"bValue":27,"gValue":139,"aValue":1}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"globalSwatchId":"","rValue":136,"bValue":67,"gValue":66,"aValue":1}}]}]},{"id":"a-8-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[]}],"createdOn":1650849502045},"a-9":{"id":"a-9","title":"Color BG - On","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":700,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650849996740},"a-10":{"id":"a-10","title":"Color BG - Out","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":700,"target":{"selector":".color-bg","selectorGuids":["d08d0c84-bb07-c16a-0f48-6f74c2be08b3"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650849996740},"a-11":{"id":"a-11","title":"Scroll","actionItemGroups":[{"actionItems":[{"id":"a-11-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-line-light","selectorGuids":["f79b9315-bed9-82f3-04c9-5a72b8f43d59"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".scroll-line-light","selectorGuids":["f79b9315-bed9-82f3-04c9-5a72b8f43d59"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".scroll-line-light","selectorGuids":["f79b9315-bed9-82f3-04c9-5a72b8f43d59"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".text-scroll","selectorGuids":["bfd728e3-44fc-5c99-f5f5-1befe0950cf8"]},"globalSwatchId":"f4c73625","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-11-n-7","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".text-scroll","selectorGuids":["bfd728e3-44fc-5c99-f5f5-1befe0950cf8"]},"globalSwatchId":"","rValue":229,"bValue":213,"gValue":223,"aValue":0.4}},{"id":"a-11-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".scroll-line-light","selectorGuids":["f79b9315-bed9-82f3-04c9-5a72b8f43d59"]},"yValue":-120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650855098374},"a-18":{"id":"a-18","title":"Grid Img Hero","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"value":0,"unit":""}},{"id":"a-18-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"xValue":0.8,"yValue":0.8,"locked":true}}]},{"actionItems":[{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":1400,"target":{"useEventTarget":"CHILDREN","selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"value":1,"unit":""}},{"id":"a-18-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":800,"easing":"ease","duration":1400,"target":{"useEventTarget":"CHILDREN","selector":".grid-img-hero","selectorGuids":["dcc5e6bf-4874-8772-bc9c-93d437d05b81"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650940364709},"a-29":{"id":"a-29","title":"View 0.1s","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-5":{"id":"a-5","title":"Hero Overflow C - Into","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"selector":".hero-overflow-c","selectorGuids":["f4accac1-1b79-1be4-6626-e0e9a5dd57f7"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"selector":".hero-overflow-c","selectorGuids":["f4accac1-1b79-1be4-6626-e0e9a5dd57f7"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650847717657},"a-7":{"id":"a-7","title":"Hero Overflow C - Out","actionItemGroups":[{"actionItems":[{"id":"a-7-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"selector":".hero-overflow-c","selectorGuids":["f4accac1-1b79-1be4-6626-e0e9a5dd57f7"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650847717657},"a-12":{"id":"a-12","title":"Scroll - Into","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".scroll","selectorGuids":["4d09d6b4-ad61-7535-0749-65e5a5d265b5"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650858309696},"a-13":{"id":"a-13","title":"Scroll - Out","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".scroll","selectorGuids":["4d09d6b4-ad61-7535-0749-65e5a5d265b5"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650858309696}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({
  as: _Component = _Builtin.Block,

  contactLink = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "hero-sticky")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "block-hero")}
        data-w-id="6b729c56-a548-b7c0-5ed0-d42db2ae2130"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-overflow-a")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-hero")}
            tag="h1"
          >
            {"Khue Pham"}
            <br />
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-overflow-b")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-hero-accent")}
            tag="h1"
          >
            {"A Fusion of Design and Technology"}
            <br />
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-overflow-c")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "line-hero")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "line-light")}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "paragraph-hero")}
            tag="h5"
          >
            {"Step into my world of "}
            <_Builtin.Span className={_utils.cx(_styles, "change-font")}>
              {"design and technology."}
            </_Builtin.Span>
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            data-w-id="6b729c56-a548-b7c0-5ed0-d42db2ae2141"
            button={true}
            options={contactLink}
          >
            {"Get in touch"}
            <br />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "block-img-hero")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "grid-img-hero")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-1")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690860405/codeherway/portfolio/merch/cata3_e36b4l.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-2")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690860926/codeherway/portfolio/promo/HAT_7_yr5h3c.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-3")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690859537/codeherway/portfolio/poster/nike_x_barbie_jjewjy.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-4")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690860404/codeherway/portfolio/merch/cata4_rcuzb7.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-5")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690859537/codeherway/portfolio/poster/spicy_giufcc.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-6")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/64a66f68b6db9c22b28bd749/64b2adc1a440469bf805d5a7_anh%20cat%20doi%201.png"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-7")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690859537/codeherway/portfolio/poster/unforgiven_of7lzi.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-8")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690859539/codeherway/portfolio/poster/Copy_of_sNOWWHITE_quc4zp.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-9")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690860404/codeherway/portfolio/merch/card_1_ja4knf.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-10")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690860927/codeherway/portfolio/promo/HAT_1_gk0pdk.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-11")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/dhq9zgqtp/image/upload/v1690860928/codeherway/portfolio/promo/AC_t5jhzb.jpg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "img-hero-12")}
            loading="eager"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/64a66f68b6db9c22b28bd749/64b2adebd59d8f1e53a16066_anh%20cat%20doi%202.png"
          />
        </_Builtin.Grid>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll")}
        data-w-id="6b729c56-a548-b7c0-5ed0-d42db2ae2152"
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "scroll-line")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "scroll-line-light")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "text-scroll")} tag="div">
          {"Scroll"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
