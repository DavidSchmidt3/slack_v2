<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <button @click="incrementButton">
      {{ title }} {{ buttonClickCount }}-krát.
    </button>
    <input type="number" v-bind="buttonClickCount" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useButtonClickCount() {
  const buttonClickCount = ref(0);
  function incrementButton() {
    buttonClickCount.value += 1;
    return buttonClickCount.value;
  }

  return { buttonClickCount, incrementButton };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
    count: {
      type: Number,
    },
  },
  setup(props) {
    return {
      ...useClickCount(),
      ...useDisplayTodo(toRef(props, 'todos')),
      ...useButtonClickCount(),
    };
  },
});
</script>
