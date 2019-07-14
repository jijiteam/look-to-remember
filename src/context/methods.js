import map from 'lodash/map';

export default context => ({
  cornflower: {
    get: () => context.cornflower,
    set: modifiers => ({ ...context, cornflower: modifiers }),
    merge: modifiers => ({ ...context, cornflower: { ...context.cornflower, ...modifiers } }),
    updateFeelings: (modifiers) => {
      const newFeelings = {};
      map(modifiers, (value, key) => {
        newFeelings[key] = context.cornflower.feelings[key] + parseInt(value, 10);
      });

      return {
        ...context,
        cornflower: {
          ...context.cornflower,
          feelings: {
            ...context.cornflower.feelings,
            ...newFeelings,
          },
        },
      };
    },
  },
});
