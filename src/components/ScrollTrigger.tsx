import React from "react";
import gsap from "gsap";
import GsapScrollTrigger from "gsap/ScrollTrigger";

interface ScrollTriggerProps<T = HTMLDivElement> extends React.HTMLAttributes<T> {
  children: any;
  enterFromOptions?: gsap.TweenVars;
  enterToOptions?: gsap.TweenVars;
  leaveFromOptions?: gsap.TweenVars;
  leaveToOptions?: gsap.TweenVars;
}

gsap.registerPlugin(GsapScrollTrigger);

function ScrollTrigger(
  {
    children,
    enterFromOptions = {},
    enterToOptions = {},
    leaveFromOptions = {},
    leaveToOptions = {},
    ...props
  }: ScrollTriggerProps,
  ref: any
): React.ReactElement {
  const scrollTriggerRef = React.useRef(ref);

  React.useEffect(() => {
    GsapScrollTrigger.create({
      trigger: scrollTriggerRef.current,
      onEnter: (self) => {
        gsap.fromTo(scrollTriggerRef.current, enterFromOptions, enterToOptions);
      },
      onEnterBack: (self) => {
        gsap.fromTo(scrollTriggerRef.current, enterFromOptions, enterToOptions);
      },
      onLeave: (self) => {
        gsap.fromTo(scrollTriggerRef.current, leaveFromOptions, leaveToOptions);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return React.createElement(children?.type, {
    ...props,
    ...children?.props,
    ref: scrollTriggerRef,
  });
}

export default React.forwardRef(ScrollTrigger);
