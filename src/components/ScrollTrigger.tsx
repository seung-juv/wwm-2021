import React from "react";
import gsap from "gsap";
import GsapScrollTrigger from "gsap/ScrollTrigger";

interface ScrollTriggerProps<T = HTMLDivElement> extends React.HTMLAttributes<T> {
  children: any;
  enterFromOptions?: gsap.TweenVars;
  enterToOptions?: gsap.TweenVars;
  leaveFromOptions?: gsap.TweenVars;
  leaveToOptions?: gsap.TweenVars;
  once?: boolean;
}

gsap.registerPlugin(GsapScrollTrigger);

function ScrollTrigger(
  {
    children,
    enterFromOptions = {},
    enterToOptions = {},
    leaveFromOptions = {},
    leaveToOptions = {},
    once,
    ...props
  }: ScrollTriggerProps,
  ref: any
): React.ReactElement {
  const scrollTriggerRef = React.useRef(ref);

  React.useEffect(() => {
    GsapScrollTrigger.create({
      once,
      trigger: scrollTriggerRef.current,
      onEnter: (self) => {
        if (self.direction > 0) {
          gsap.fromTo(scrollTriggerRef.current, enterFromOptions, enterToOptions);
        }
      },
      onEnterBack: (self) => {
        if (self.direction > 0) {
          gsap.fromTo(scrollTriggerRef.current, enterFromOptions, enterToOptions);
        }
      },
      onLeave: (self) => {
        if (self.direction < 0) {
          gsap.fromTo(scrollTriggerRef.current, leaveFromOptions, leaveToOptions);
        }
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
