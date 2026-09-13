/* @ds-bundle: {"format":4,"namespace":"MySpaceDesignSystem_5ece30","components":[{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/surfaces/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"}],"sourceHashes":{"components/core/ArrowLink.jsx":"2256b216adcf","components/core/Badge.jsx":"c96702e8cb32","components/core/Button.jsx":"4d8d5d46056d","components/core/IconButton.jsx":"846bfd4ed8f8","components/core/Logo.jsx":"7fc74dff4fe8","components/core/Tag.jsx":"701abedf966c","components/feedback/Dialog.jsx":"851a47a4cc55","components/feedback/Toast.jsx":"131e6f205b10","components/feedback/Tooltip.jsx":"d8d9e12e385d","components/forms/Checkbox.jsx":"276b2d557925","components/forms/Input.jsx":"a14017bc052a","components/forms/Radio.jsx":"f00280dc5dde","components/forms/Select.jsx":"927080a93103","components/forms/Switch.jsx":"d8bcce230663","components/forms/Textarea.jsx":"a9ea5700b7fb","components/navigation/NavBar.jsx":"e7839d6abe14","components/navigation/Tabs.jsx":"707462a78376","components/surfaces/Card.jsx":"e2bb266819a9","components/surfaces/SectionHeading.jsx":"835acad4213b","components/surfaces/Stat.jsx":"a5baed41bff2","ui_kits/site/AccountScreen.jsx":"d758ea87ac42","ui_kits/site/App.jsx":"7ef3ffb9fa02","ui_kits/site/BookingScreen.jsx":"d7c1545abaa8","ui_kits/site/HomeScreen.jsx":"63768d724311","ui_kits/site/Shared.jsx":"de23f0b3f76c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MySpaceDesignSystem_5ece30 = window.MySpaceDesignSystem_5ece30 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ArrowLink.jsx
try { (() => {
function ArrowLink({
  children,
  href = "#",
  size = "md",
  muted = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const fs = size === "lg" ? "18px" : size === "sm" ? "13px" : "15px";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--type-button)",
      fontSize: fs,
      fontWeight: "var(--fw-medium)",
      color: muted && !hover ? "var(--text-body)" : "var(--white)",
      textDecoration: "none",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: hover ? "1px solid var(--alpha-white-40)" : "1px solid transparent",
      transition: "var(--transition-control)"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.05em",
      display: "inline-block",
      transform: hover ? "translate(2px,-2px)" : "translate(0,0)",
      transition: "transform var(--dur-base) var(--ease-out-soft)"
    }
  }, "\u2197"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    color: "var(--text-muted)",
    border: "var(--border-default)",
    background: "transparent"
  },
  solid: {
    color: "var(--text-on-invert)",
    border: "var(--surface-invert)",
    background: "var(--surface-invert)"
  },
  positive: {
    color: "var(--signal-positive)",
    border: "rgba(127,209,166,.32)",
    background: "rgba(127,209,166,.08)"
  },
  caution: {
    color: "var(--signal-caution)",
    border: "rgba(224,192,122,.32)",
    background: "rgba(224,192,122,.08)"
  },
  critical: {
    color: "var(--signal-critical)",
    border: "rgba(227,138,128,.32)",
    background: "rgba(227,138,128,.08)"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot = false
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      alignItems: "center",
      gap: "var(--space-2)",
      height: "22px",
      padding: "0 10px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid " + t.border,
      background: t.background,
      color: t.color,
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase"
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 var(--control-px-sm)",
    fontSize: "13px"
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 var(--control-px-md)",
    fontSize: "14px"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 var(--control-px-lg)",
    fontSize: "15px"
  }
};
const variants = {
  primary: {
    background: "var(--surface-invert)",
    color: "var(--text-on-invert)",
    border: "1px solid var(--surface-invert)"
  },
  secondary: {
    background: "transparent",
    color: "var(--white)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent"
  },
  quiet: {
    background: "var(--alpha-white-04)",
    color: "var(--white)",
    border: "1px solid var(--border-hairline)"
  }
};
function Button({
  children,
  variant = "secondary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconRight,
  iconLeft,
  type = "button",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.secondary;
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: "var(--ink-100)",
    borderColor: "var(--ink-100)"
  } : {
    background: "var(--control-bg-hover)",
    borderColor: "var(--border-strong)",
    color: "var(--white)"
  } : null;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : "auto",
      borderRadius: "var(--radius-sm)",
      font: "var(--type-button)",
      letterSpacing: "-0.005em",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      transform: press ? "scale(.985)" : "scale(1)",
      transition: "var(--transition-control), transform var(--dur-instant) var(--ease-standard)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...v,
      ...hoverStyle,
      ...style
    }
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 34,
  md: 42,
  lg: 52
};
function IconButton({
  children,
  label,
  size = "md",
  variant = "secondary",
  disabled = false,
  round = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size] || sizes.md;
  const base = variant === "primary" ? {
    background: "var(--surface-invert)",
    color: "var(--text-on-invert)",
    border: "1px solid var(--surface-invert)"
  } : variant === "ghost" ? {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent"
  } : {
    background: "transparent",
    color: "var(--white)",
    border: "1px solid var(--border-default)"
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      transition: "var(--transition-control)",
      ...base,
      ...(hover && !disabled ? variant === "primary" ? {
        background: "var(--ink-100)"
      } : {
        background: "var(--control-bg-hover)",
        borderColor: "var(--border-strong)",
        color: "var(--white)"
      } : null)
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = "wordmark",
  height = 22,
  assetBase = "../../assets",
  label = "MySpace"
}) {
  if (variant === "lockup" || variant === "mark") {
    const src = assetBase + (variant === "lockup" ? "/logo-lockup-dark.png" : "/logo-mark-dark.png");
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: label,
      style: {
        height: height,
        width: "auto",
        display: "block"
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: height * 0.8,
      letterSpacing: "-0.02em",
      color: "var(--text-display)",
      whiteSpace: "nowrap"
    }
  }, label);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  onRemove
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: "28px",
      padding: "0 12px",
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (selected ? "var(--white)" : "var(--border-default)"),
      background: selected ? "var(--surface-invert)" : hover && interactive ? "var(--control-bg-hover)" : "transparent",
      color: selected ? "var(--text-on-invert)" : "var(--text-body)",
      font: "var(--type-body-sm)",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-control)",
      userSelect: "none"
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      opacity: .6,
      cursor: "pointer",
      fontSize: "14px",
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "var(--scrim-modal)",
      backdropFilter: "var(--blur-sm)",
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-panel)",
      padding: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--fs-h3)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-display)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "transparent",
      border: "none",
      color: "var(--text-muted)",
      fontSize: "18px",
      lineHeight: 1,
      cursor: "pointer"
    }
  }, "\xD7")), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  neutral: "var(--white)",
  positive: "var(--signal-positive)",
  caution: "var(--signal-caution)",
  critical: "var(--signal-critical)"
};
function Toast({
  title,
  message,
  tone = "neutral",
  onDismiss,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: 280,
      maxWidth: 420,
      padding: "14px var(--space-4)",
      background: "var(--glass-bg)",
      backdropFilter: "var(--blur-md)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: tones[tone],
      marginTop: 7,
      flex: "0 0 6px"
    }
  }), icon, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "14px",
      fontWeight: "var(--fw-medium)",
      color: "var(--white)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "transparent",
      border: "none",
      color: "var(--text-faint)",
      cursor: "pointer",
      fontSize: "16px",
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      padding: "6px 10px",
      background: "var(--ink-050)",
      color: "var(--ink-1000)",
      borderRadius: "var(--radius-xs)",
      font: "var(--type-body-sm)",
      fontSize: "12px",
      boxShadow: "var(--shadow-md)",
      transition: "opacity var(--dur-fast) var(--ease-standard)",
      zIndex: 20
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  description
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      marginTop: description ? 2 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (checked ? "var(--white)" : "var(--border-strong)"),
      background: checked ? "var(--surface-invert)" : "var(--surface-inset)",
      color: "var(--text-on-invert)",
      fontSize: "11px",
      transition: "var(--transition-control)"
    }
  }, checked ? "\u2713" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "13px",
      color: "var(--text-faint)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  size = "md",
  error,
  hint,
  disabled = false,
  id,
  iconLeft,
  fullWidth = true
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "lg" ? "var(--control-h-lg)" : size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : "auto"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: h,
      padding: "0 var(--control-px-md)",
      background: "var(--surface-inset)",
      border: "1px solid " + (error ? "var(--signal-critical)" : focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "flex"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--white)",
      font: "var(--type-body)",
      fontSize: "15px"
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "13px",
      color: error ? "var(--signal-critical)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  description
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      marginTop: description ? 2 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "1px solid " + (checked ? "var(--white)" : "var(--border-strong)"),
      background: "var(--surface-inset)",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--white)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "13px",
      color: "var(--text-faint)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  size = "md",
  disabled = false,
  id,
  placeholder
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "lg" ? "var(--control-h-lg)" : size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      height: h,
      padding: "0 40px 0 var(--control-px-md)",
      background: "var(--surface-inset)",
      border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
      color: value ? "var(--white)" : "var(--text-faint)",
      font: "var(--type-body)",
      fontSize: "15px",
      outline: "none",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)",
      cursor: "pointer"
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value || o,
    value: o.value || o,
    style: {
      background: "var(--ink-900)"
    }
  }, o.label || o))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 16,
      color: "var(--text-muted)",
      fontSize: "11px",
      pointerEvents: "none"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = "md"
}) {
  const w = size === "sm" ? 34 : 44;
  const h = size === "sm" ? 20 : 24;
  const k = h - 6;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: w,
      height: h,
      flex: "0 0 " + w + "px",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--surface-invert)" : "var(--ink-800)",
      border: "1px solid " + (checked ? "var(--white)" : "var(--border-default)"),
      display: "flex",
      alignItems: "center",
      padding: "0 2px",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: k,
      height: k,
      borderRadius: "50%",
      background: checked ? "var(--ink-1000)" : "var(--ink-300)",
      transform: "translateX(" + (checked ? w - k - 6 : 0) + "px)",
      transition: "transform var(--dur-base) var(--ease-out-soft), background var(--dur-fast) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  hint,
  error,
  disabled = false,
  id
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    id: id,
    rows: rows,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      resize: "vertical",
      padding: "14px var(--control-px-md)",
      background: "var(--surface-inset)",
      border: "1px solid " + (error ? "var(--signal-critical)" : focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
      color: "var(--white)",
      font: "var(--type-body)",
      fontSize: "15px",
      outline: "none",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)"
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "13px",
      color: error ? "var(--signal-critical)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  items = [],
  active,
  onNavigate,
  cta = "Get a quote",
  onCta,
  assetBase = "../../assets",
  transparent = true
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      padding: "var(--space-6) var(--gutter-page)",
      background: transparent ? "transparent" : "var(--glass-bg)",
      backdropFilter: transparent ? "none" : "var(--blur-md)",
      borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wordmark",
    height: 20,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, items.map(it => {
    const on = active === (it.id || it.label);
    return /*#__PURE__*/React.createElement("a", {
      key: it.id || it.label,
      href: it.href || "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id || it.label);
      },
      style: {
        font: "var(--type-body-sm)",
        fontFamily: "var(--font-display)",
        fontSize: "14px",
        color: on ? "var(--white)" : "var(--text-body)",
        textDecoration: "none",
        paddingBottom: "2px",
        borderBottom: "1px solid " + (on ? "var(--alpha-white-40)" : "transparent"),
        transition: "var(--transition-control)"
      }
    }, it.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "md",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline"
}) {
  if (variant === "segmented") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: "2px",
        padding: "3px",
        background: "var(--surface-inset)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)"
      }
    }, items.map(it => {
      const on = value === (it.id || it.label);
      return /*#__PURE__*/React.createElement("button", {
        key: it.id || it.label,
        type: "button",
        onClick: () => onChange && onChange(it.id || it.label),
        style: {
          border: "none",
          borderRadius: "6px",
          padding: "0 14px",
          height: "30px",
          background: on ? "var(--alpha-white-12)" : "transparent",
          color: on ? "var(--white)" : "var(--text-muted)",
          font: "var(--type-button)",
          cursor: "pointer",
          transition: "var(--transition-control)"
        }
      }, it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, items.map(it => {
    const on = value === (it.id || it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: it.id || it.label,
      type: "button",
      onClick: () => onChange && onChange(it.id || it.label),
      style: {
        background: "transparent",
        border: "none",
        borderBottom: "1px solid " + (on ? "var(--white)" : "transparent"),
        padding: "0 0 12px",
        marginBottom: "-1px",
        color: on ? "var(--white)" : "var(--text-muted)",
        font: "var(--type-button)",
        fontSize: "14px",
        cursor: "pointer",
        transition: "var(--transition-control)"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  variant = "outline",
  padding = "var(--space-8)",
  interactive = false,
  media,
  radius = "var(--radius-lg)",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    outline: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-md)"
    },
    raised: {
      background: "var(--surface-raised)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-lg)"
    },
    inset: {
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "none"
    },
    glass: {
      background: "var(--glass-bg)",
      border: "1px solid var(--border-default)",
      backdropFilter: "var(--blur-md)",
      boxShadow: "var(--shadow-md)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: radius,
      overflow: "hidden",
      transition: "var(--transition-control), transform var(--dur-base) var(--ease-out-soft), box-shadow var(--dur-base) var(--ease-standard)",
      ...variants[variant],
      ...(interactive && hover ? {
        borderColor: "var(--border-strong)",
        transform: "translateY(-2px)",
        boxShadow: "var(--shadow-lg)"
      } : null),
      ...style
    }
  }, media && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 9",
      overflow: "hidden",
      background: "var(--ink-1000)"
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  action
}) {
  const fs = size === "lg" ? "var(--fs-display-2)" : size === "sm" ? "var(--fs-h2)" : "var(--fs-h1)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: align === "center" ? "column" : "row",
      alignItems: align === "center" ? "center" : "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      textAlign: align === "center" ? "center" : "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth: align === "center" ? "var(--container-narrow)" : "640px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: fs,
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)",
      textWrap: "pretty"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, description)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  note,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-extralight)",
      fontSize: "var(--fs-display-2)",
      lineHeight: 1,
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-faint)"
    }
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/AccountScreen.jsx
try { (() => {
function AccountScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "72vh",
      background: "var(--surface-inset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-24) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)",
      textAlign: "center",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + "/logo-mark-dark.png",
    alt: "",
    style: {
      height: 44,
      width: "auto",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0439 \u043A\u0430\u0431\u0456\u043D\u0435\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--fs-display-2)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)"
    }
  }, "\u0429\u0435 \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u044F\u0454\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "\u0422\u0443\u0442 \u0437'\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u0430\u0448\u0456 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F, \u0456\u0441\u0442\u043E\u0440\u0456\u044F \u0441\u0435\u0430\u043D\u0441\u0456\u0432 \u0442\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456 \u043F\u043E\u0431\u0430\u0436\u0430\u043D\u043D\u044F."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("home")
  }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443")));
}
Object.assign(window, {
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/AccountScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function App() {
  const [route, setRoute] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 24);
    el.addEventListener("scroll", on);
    return () => el.removeEventListener("scroll", on);
  }, []);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const go = r => {
    setRoute(r);
    const el = document.getElementById("kit-scroll");
    if (el) el.scrollTop = 0;
  };
  const push = t => {
    const id = Date.now();
    setToasts(x => [...x, {
      id,
      ...t
    }]);
    setTimeout(() => setToasts(x => x.filter(y => y.id !== id)), 5000);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "kit-scroll",
    style: {
      height: "100vh",
      overflowY: "auto",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go,
    scrolled: scrolled,
    onCta: () => go("booking")
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, route === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    onSent: () => push({
      tone: "positive",
      title: "Дякуємо!",
      message: "Ми зв'яжемося з вами найближчим часом."
    })
  }), route === "booking" && /*#__PURE__*/React.createElement(BookingScreen, {
    onBooked: (d, s) => push({
      tone: "positive",
      title: "Час заброньовано",
      message: d + " вересня, " + s + " — чекаємо на вас."
    })
  }), route === "account" && /*#__PURE__*/React.createElement(AccountScreen, {
    go: go
  }), route === "contact" && /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    title: "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C",
    description: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D, Instagram \u0430\u0431\u043E \u0444\u043E\u0440\u043C\u0430 \u2014 \u044F\u043A \u0432\u0430\u043C \u0437\u0440\u0443\u0447\u043D\u0456\u0448\u0435."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(ContactForm, {
    onSent: () => push({
      tone: "positive",
      title: "Дякуємо!",
      message: "Ми зв'яжемося з вами найближчим часом."
    })
  }))))), /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-6)",
      bottom: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      zIndex: 60
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    onDismiss: () => setToasts(x => x.filter(y => y.id !== t.id))
  })))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/BookingScreen.jsx
try { (() => {
const MONTH = {
  label: "Вересень 2026",
  firstWeekday: 1,
  days: 30
};
const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const SLOTS = ["12:00", "14:30", "17:00", "19:30", "22:00"];
const BUSY = {
  3: ["17:00", "19:30"],
  7: ["12:00"],
  12: ["19:30", "22:00"],
  18: ["14:30"],
  21: ["12:00", "17:00", "19:30"],
  26: ["22:00"]
};
function BookingScreen({
  onBooked
}) {
  const [day, setDay] = React.useState(12);
  const [slot, setSlot] = React.useState(null);
  const [guests, setGuests] = React.useState("4");
  const busy = BUSY[day] || [];
  const cells = [];
  for (let i = 0; i < MONTH.firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= MONTH.days; d++) cells.push(d);
  return /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
    title: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443 \u0442\u0430 \u0447\u0430\u0441",
    description: "\u0417\u0430\u043B \u043F\u0440\u0430\u0446\u044E\u0454 \u0449\u043E\u0434\u043D\u044F. \u041E\u0434\u0438\u043D \u0441\u0435\u0430\u043D\u0441 \u2014 \u0434\u043E 8-\u043C\u0438 \u043E\u0441\u0456\u0431."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--grid-gap)",
      width: "100%",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      fontFamily: "var(--font-display)",
      color: "var(--text-display)"
    }
  }, MONTH.label), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u043C\u0456\u0441\u044F\u0446\u044C"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: "var(--space-2)"
    }
  }, WEEKDAYS.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      textAlign: "center",
      paddingBottom: "var(--space-2)"
    }
  }, w)), cells.map((d, i) => d === null ? /*#__PURE__*/React.createElement("span", {
    key: "e" + i
  }) : /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    onClick: () => {
      setDay(d);
      setSlot(null);
    },
    style: {
      height: 46,
      borderRadius: "var(--radius-sm)",
      border: "1px solid " + (day === d ? "var(--white)" : "var(--border-hairline)"),
      background: day === d ? "var(--surface-invert)" : "transparent",
      color: day === d ? "var(--text-on-invert)" : "var(--text-body)",
      font: "var(--type-body-sm)",
      fontFamily: "var(--font-mono)",
      cursor: "pointer",
      transition: "var(--transition-control)"
    }
  }, d)))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, day, " \u0432\u0435\u0440\u0435\u0441\u043D\u044F \xB7 \u0432\u0456\u043B\u044C\u043D\u0456 \u0441\u0435\u0430\u043D\u0441\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, SLOTS.map(s => {
    const taken = busy.includes(s);
    return taken ? /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        height: 28,
        padding: "0 12px",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "var(--radius-xs)",
        border: "1px solid var(--border-hairline)",
        color: "var(--text-faint)",
        font: "var(--type-body-sm)",
        textDecoration: "line-through"
      }
    }, s) : /*#__PURE__*/React.createElement(Tag, {
      key: s,
      selected: slot === s,
      onClick: () => setSlot(s)
    }, s);
  }))), /*#__PURE__*/React.createElement(Select, {
    label: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0433\u043E\u0441\u0442\u0435\u0439",
    value: guests,
    onChange: e => setGuests(e.target.value),
    options: ["2", "3", "4", "5", "6", "7", "8"].map(n => ({
      value: n,
      label: n + (Number(n) < 5 ? " особи" : " осіб")
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, [["Дата", day + " вересня 2026"], ["Час", slot || "не вибрано"], ["Гостей", guests]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      color: "var(--white)"
    }
  }, v)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "primary",
    size: "lg",
    disabled: !slot,
    onClick: () => onBooked && onBooked(day, slot)
  }, "\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 \u0447\u0430\u0441"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "13px",
      color: "var(--text-faint)",
      textAlign: "center"
    }
  }, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043D\u0430\u0434\u0456\u0448\u043B\u0435\u043C\u043E \u0443 Telegram \u0430\u0431\u043E Instagram."))))));
}
Object.assign(window, {
  BookingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
function Podium({
  go
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "50%",
      minWidth: 420,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-panel)",
      transform: "perspective(1600px) rotateX(1.5deg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + "/hero-cinema.jpg",
    alt: "\u0417\u0430\u043B MySpace",
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#booking",
    onClick: e => {
      e.preventDefault();
      go("booking");
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": "\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 \u0447\u0430\u0441 \u0443 MySpace",
    style: {
      position: "absolute",
      left: "34%",
      top: "28%",
      width: "32%",
      height: "28%",
      borderRadius: "var(--radius-md)",
      border: "1px solid " + (hover ? "var(--border-strong)" : "transparent"),
      background: hover ? "var(--alpha-white-04)" : "transparent",
      boxShadow: hover ? "var(--glow-soft)" : "none",
      transition: "var(--transition-control), box-shadow var(--dur-base) var(--ease-out-soft)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "60%",
      transform: "translateX(-50%)",
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--white)",
      whiteSpace: "nowrap",
      opacity: hover ? 1 : 0,
      transition: "opacity var(--dur-base) var(--ease-standard)",
      pointerEvents: "none"
    }
  }, "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "108%",
      height: 22,
      background: "var(--ink-900)",
      borderLeft: "1px solid var(--border-hairline)",
      borderRight: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)",
      borderRadius: "0 0 var(--radius-md) var(--radius-md)",
      boxShadow: "var(--inner-top-light)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "128%",
      height: 14,
      background: "var(--ink-950)",
      borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
      boxShadow: "var(--inner-top-light), var(--shadow-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "150%",
      height: 40,
      background: "var(--wash-floor)",
      opacity: .35
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--fs-display-2)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)"
    }
  }, "\u0422\u0432\u0456\u0439 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-extralight)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-muted)"
    }
  }, "\u0434\u043B\u044F \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0438\u0445 \u0441\u043F\u043E\u0433\u0430\u0434\u0456\u0432")));
}
const FEATURES = ["Dolby Surround", "Якість 4K", "Можна зі своєю їжею", "До 8-ми осіб"];
function FeatureRow() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--grid-gap)"
    }
  }, FEATURES.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 96,
      padding: "var(--space-6)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      fontFamily: "var(--font-display)",
      color: "var(--text-display)",
      textWrap: "balance"
    }
  }, t))));
}
function ContactForm({
  onSent
}) {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    social: "",
    note: "",
    consent: true
  });
  const [err, setErr] = React.useState(null);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = () => {
    if (!form.phone.trim() && !form.email.trim() && !form.social.trim()) {
      setErr("Залиште хоча б один спосіб зв'язку");
      return;
    }
    setErr(null);
    onSent && onSent();
    setForm({
      name: "",
      phone: "",
      email: "",
      social: "",
      note: "",
      consent: true
    });
  };
  return /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "var(--space-10)",
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0406\u043C'\u044F",
    placeholder: "\u042F\u043A \u0434\u043E \u0432\u0430\u0441 \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044F",
    value: form.name,
    onChange: set("name")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+38 0__ ___ __ __",
    value: form.phone,
    onChange: set("phone"),
    error: err
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@mail.com",
    value: form.email,
    onChange: set("email")
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456",
    placeholder: "@instagram / telegram",
    value: form.social,
    onChange: set("social"),
    hint: "\u0414\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043E\u0434\u043D\u043E\u0433\u043E \u0437\u0456 \u0441\u043F\u043E\u0441\u043E\u0431\u0456\u0432 \u0437\u0432'\u044F\u0437\u043A\u0443."
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F",
    rows: 3,
    placeholder: "\u0414\u0430\u0442\u0430, \u0447\u0430\u0441, \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0433\u043E\u0441\u0442\u0435\u0439, \u043F\u043E\u0431\u0430\u0436\u0430\u043D\u043D\u044F\u2026",
    value: form.note,
    onChange: set("note")
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u041F\u043E\u0433\u043E\u0434\u0436\u0443\u044E\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",
    checked: form.consent,
    onChange: () => setForm(f => ({
      ...f,
      consent: !f.consent
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: submit
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"), /*#__PURE__*/React.createElement(ArrowLink, {
    muted: true,
    size: "sm",
    href: "tel:+380992889872"
  }, "\u0410\u0431\u043E \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0439\u0442\u0435 \u043D\u0430\u043C"))));
}
function HomeScreen({
  go,
  onSent
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--wash-vignette)",
      paddingTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Podium, {
    go: go
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, null)), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("account")
  }, "\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0439 \u043A\u0430\u0431\u0456\u043D\u0435\u0442"))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432'\u044F\u0437\u043E\u043A",
    title: "\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u043E\u0457 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    description: "\u041C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0456 \u043F\u0456\u0434\u0431\u0435\u0440\u0435\u043C\u043E \u0432\u0456\u043B\u044C\u043D\u0438\u0439 \u0447\u0430\u0441."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(ContactForm, {
    onSent: onSent
  })))));
}
Object.assign(window, {
  HomeScreen,
  Podium,
  FeatureRow,
  ContactForm,
  FEATURES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Shared.jsx
try { (() => {
const {
  NavBar,
  Button,
  ArrowLink,
  Badge,
  Tag,
  Card,
  SectionHeading,
  Stat,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  IconButton,
  Logo
} = window.MySpaceDesignSystem_5ece30;
const ASSETS = "../../assets";
const NAV = [{
  id: "home",
  label: "Головна"
}, {
  id: "booking",
  label: "Бронювання"
}, {
  id: "account",
  label: "Особистий кабінет"
}, {
  id: "contact",
  label: "Контакти"
}];
function Header({
  route,
  go,
  scrolled,
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: NAV,
    active: route,
    onNavigate: go,
    assetBase: ASSETS,
    transparent: !scrolled,
    cta: "\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 \u0447\u0430\u0441",
    onCta: onCta
  }));
}
function Section({
  children,
  tight,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: (tight ? "var(--space-20)" : "var(--space-32)") + " var(--gutter-page)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
}
function SiteFooter({
  go
}) {
  const row = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
    font: "var(--type-body)",
    color: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-16) var(--gutter-page) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-10)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + "/logo-lockup-dark.png",
    alt: "MySpace",
    style: {
      height: 108,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/myspacerv",
    target: "_blank",
    rel: "noreferrer",
    style: row
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "instagram",
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "myspacerv")), /*#__PURE__*/React.createElement("a", {
    href: "tel:+380992889872",
    style: row
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, "+38 099 288 98 72")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      color: "var(--text-body)",
      maxWidth: 460,
      textAlign: "left",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 18,
      height: 18,
      marginTop: 4,
      flex: "0 0 18px"
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u041A\u0438\u0457\u0432\u0441\u044C\u043A\u0430 47, \u0411\u0426 \xABSkyliner\xBB \xB7 \u0421\u0435\u043A\u0446\u0456\u044F \u0421 \xB7 7-\u0439 \u043F\u043E\u0432\u0435\u0440\u0445 \xB7 \u2116 704"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "\xA9 2026 MySpace"))));
}
Object.assign(window, {
  NAV,
  ASSETS,
  Header,
  Section,
  SiteFooter,
  NavBar,
  Button,
  ArrowLink,
  Badge,
  Tag,
  Card,
  SectionHeading,
  Stat,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  IconButton,
  Logo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

})();
