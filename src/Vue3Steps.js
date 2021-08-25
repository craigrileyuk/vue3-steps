import { ref, h, provide, watch, Transition } from "vue";
import "./style.scss";

const generateHeaderComponents = (props, slots) => {
  const hr = () => {
    return h("hr", { class: "vue3-steps__header--divider" });
  };
  return h(
    "header",
    {
      class: ["vue3-steps__header--container"],
    },
    [
      slots.header().map((header, idx, arr) => {
        const insert = [header];
        if (idx < arr.length - 1) insert.push(hr());
        return insert;
      }),
    ]
  );
};

const generateContentComponents = (
  props,
  slots,
  currentStep,
  slideDirection
) => {
  const transitionNode = h(
    Transition,
    {
      mode: "out-in",
      name: "fade",
    },
    {
      default() {
        const active = slots
          .default()
          .find((content) => content.props.step === currentStep.value);
        return active;
      },
    }
  );

  const container = h("div", { class: "vue3-steps__content--container" }, [
    transitionNode,
  ]);

  return container;
};

export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: 1,
    },
  },
  setup(props, { slots, emit }) {
    const currentStep = ref(props.modelValue);
    const slideDirection = ref("left");
    const onChangeStep = (step) => {
      currentStep.value = step;
    };
    provide("changeStep", onChangeStep);
    provide("currentStep", currentStep);

    watch(currentStep, (newValue, oldValue) => {
      slideDirection.value = newValue > oldValue ? "left" : "right";
      emit("update:modelValue", newValue);
    });
    watch(
      () => props.modelValue,
      (v) => {
        currentStep.value = v;
      }
    );

    return () =>
      h(
        "div",
        {
          class: [
            "vue3-steps__steps",
            {
              "is-vertical": props.vertical,
            },
          ],
        },
        [
          generateHeaderComponents(props, slots),
          generateContentComponents(props, slots, currentStep, slideDirection),
        ]
      );
  },
};
