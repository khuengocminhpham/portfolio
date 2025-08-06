import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Contact.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-95":{"id":"e-95","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651535154300},"e-96":{"id":"e-96","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651535154300},"e-108":{"id":"e-108","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651536445831},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651536445832},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651536602202},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651536602203},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651538523395},"e-113":{"id":"e-113","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebff527b-292f-ed28-0a4b-914b252fdf97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebff527b-292f-ed28-0a4b-914b252fdf97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651538523396}},"actionLists":{"a-27":{"id":"a-27","title":"View 0.2s + Move","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-28":{"id":"a-28","title":"View Out + Move","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116},"a-30":{"id":"a-30","title":"View 0.3s + Move","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-30-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-30-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-31":{"id":"a-31","title":"View 0.4s + Move","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-31-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-31-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Contact({ as: _Component = _Builtin.Section, formProps = {} }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-full")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-top")}
          data-w-id="ebff527b-292f-ed28-0a4b-914b252fdf8b"
          tag="h1"
        >
          {"SAY HELLO"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "line")}
          data-w-id="ebff527b-292f-ed28-0a4b-914b252fdf8d"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "line-light")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(_styles, "paragraph-hero")}
          data-w-id="ebff527b-292f-ed28-0a4b-914b252fdf8f"
          tag="h5"
        >
          {"Fill out the form or "}
          <_Builtin.Span className={_utils.cx(_styles, "text-accent")}>
            {"email"}
          </_Builtin.Span>
          {" me at "}
          <_Builtin.Span className={_utils.cx(_styles, "text-accent")}>
            {"kphamnm06@gmail.com"}
            <br />
          </_Builtin.Span>
        </_Builtin.Heading>
        <_Builtin.FormWrapper
          className={_utils.cx(_styles, "form-block")}
          data-w-id="ebff527b-292f-ed28-0a4b-914b252fdf97"
          {...formProps}
        >
          <_Builtin.FormForm
            className={_utils.cx(_styles, "form")}
            name="email-form"
            data-name="Email Form"
            method="post"
            id="email-form"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "text-field")}
              name="name-2"
              maxLength={256}
              data-name="Name 2"
              placeholder="Name"
              disabled={false}
              type="text"
              required={true}
              autoFocus={false}
              id="name-2"
            />
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "text-field")}
              name="email-2"
              maxLength={256}
              data-name="Email 2"
              placeholder="Email"
              disabled={false}
              type="email"
              required={true}
              autoFocus={false}
              id="email-2"
            />
            <_Builtin.FormTextarea
              className={_utils.cx(
                _styles,
                "textarea",
                "w-node-ebff527b-292f-ed28-0a4b-914b252fdf9b-252fdf89"
              )}
              id={_utils.cx(_styles, "message-2")}
              name="message-2"
              maxLength={5000}
              data-name="Message 2"
              placeholder="Message"
              required={true}
              autoFocus={false}
            />
            <_Builtin.FormButton
              className={_utils.cx(_styles, "button")}
              id={_utils.cx(
                _styles,
                "w-node-ebff527b-292f-ed28-0a4b-914b252fdf9c-252fdf89"
              )}
              type="submit"
              value="Submit"
              data-wait="Please wait..."
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage
            className={_utils.cx(_styles, "success-message")}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-success")}
              tag="div"
            >
              {"Redirecting you..."}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage
            className={_utils.cx(_styles, "error-message")}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-error")}
              tag="div"
            >
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
