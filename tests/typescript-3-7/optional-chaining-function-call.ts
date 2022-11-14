const myFunction: (() => void) | undefined =
  Math.random() % 2
      ? undefined
      : () => {
          // eslint-disable-next-line no-console
          console.log("test");
      };
myFunction?.();
