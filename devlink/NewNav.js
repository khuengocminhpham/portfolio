import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewNav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-231":{"id":"e-231","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689828567754},"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689828567756},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb19a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb19a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689828760587},"e-246":{"id":"e-246","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb19e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb19e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915199368},"e-247":{"id":"e-247","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb19e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb19e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915199370},"e-248":{"id":"e-248","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915251184},"e-249":{"id":"e-249","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915251185},"e-250":{"id":"e-250","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-251"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915295315},"e-251":{"id":"e-251","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915295346},"e-252":{"id":"e-252","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-253"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915311634},"e-253":{"id":"e-253","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-252"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb1a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689915311635},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81a|ea12cd02-1cb4-5741-96ec-56402b79aa5d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81a|ea12cd02-1cb4-5741-96ec-56402b79aa5d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1692093983664},"e-295":{"id":"e-295","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81a|ea12cd02-1cb4-5741-96ec-56402b79aa5d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81a|ea12cd02-1cb4-5741-96ec-56402b79aa5d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1692093983664}},"actionLists":{"a-14":{"id":"a-14","title":"Navbar - Open","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":700,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650847717657},"a-15":{"id":"a-15","title":"Navbar - Close","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650847717657},"a-29":{"id":"a-29","title":"View 0.1s","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-37":{"id":"a-37","title":"Nav Link - On 2","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".nav-overflow-2","selectorGuids":["3f083c8c-eaec-7452-565c-e609cee6b4db"]},"value":0.3,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650939196729},"a-38":{"id":"a-38","title":"Nav Link - Out 2","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".nav-overflow-2","selectorGuids":["3f083c8c-eaec-7452-565c-e609cee6b4db"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650939282143}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewNav({
  as: _Component = _Builtin.NavbarWrapper,

  home = {
    href: "/",
  },

  projects = {
    href: "/projects",
  },

  porfolio = {
    href: "/portfolio",
  },

  contact = {
    href: "/contact",
  },

  about = {
    href: "/portfolio",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar-2")}
      data-w-id="4018dd8e-2bd5-971d-3766-c9cb3ddeb199"
      tag="div"
      config={{
        animation: "default",
        collapse: "all",
        docHeight: false,
        duration: 1000,
        easing: "ease-in-out-quint",
        easing2: "ease-in-out-quint",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "block-navbar")}
        data-w-id="4018dd8e-2bd5-971d-3766-c9cb3ddeb19a"
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "nav")} tag="div">
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "brand")}
            options={home}
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "logo-header-2")}
              tag="h1"
            >
              {"CODE "}
              <_Builtin.Span className={_utils.cx(_styles, "font-changer")}>
                {"HER WAY"}
              </_Builtin.Span>
            </_Builtin.Heading>
          </_Builtin.NavbarBrand>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "nav-small")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "logo-header-2")}
            button={false}
            options={projects}
          >
            {"PROJECTS"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "logo-header-2")}
            button={false}
            options={porfolio}
          >
            {"PORTFOLIO"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "logo-header-2")}
            button={false}
            options={about}
          >
            {"ABOUT"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "logo-header-2")}
            button={false}
            options={contact}
          >
            {"CONTACT"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav", "nav-big")}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu-2")}
            tag="div"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-links-3")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-6", "nav-overflow-2")}
                data-w-id="4018dd8e-2bd5-971d-3766-c9cb3ddeb19e"
                button={false}
                options={home}
              >
                {"Home"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-6", "nav-overflow-2")}
                data-w-id="4018dd8e-2bd5-971d-3766-c9cb3ddeb1a1"
                button={false}
                options={projects}
              >
                {"PROJECTS"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-6", "nav-overflow-2")}
                data-w-id="4018dd8e-2bd5-971d-3766-c9cb3ddeb1a4"
                button={false}
                options={porfolio}
              >
                {"PORTFOLIO"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-6", "nav-overflow-2")}
                data-w-id="ea12cd02-1cb4-5741-96ec-56402b79aa5d"
                button={false}
                options={about}
              >
                {"ABOUT"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-6", "nav-overflow-2")}
                data-w-id="4018dd8e-2bd5-971d-3766-c9cb3ddeb1a7"
                button={false}
                options={contact}
              >
                {"Contact"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon-3")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon-line")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon-line")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon-line")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
