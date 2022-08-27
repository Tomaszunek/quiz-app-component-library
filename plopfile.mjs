export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description:
      "create components with stories, test, index in chooses type element",
    prompts: [
      {
        type: "list",
        name: "compType",
        choices: ["atoms", "molecules", "organisms", "templates"],
        message: "What is type of component?",
      },
      {
        type: "input",
        name: "compName",
        message:
          "What is component name?(Component should start with upper case)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{compType}}/{{pascalCase compName}}/{{pascalCase compName}}.tsx",
        templateFile: "plop-templates/component/component.hbs",
      },
      {
        type: "add",
        path: "src/{{compType}}/{{pascalCase compName}}/{{pascalCase compName}}.stories.tsx",
        templateFile: "plop-templates/component/component.story.hbs",
      },
      {
        type: "add",
        path: "src/{{compType}}/{{pascalCase compName}}/{{pascalCase compName}}.test.tsx",
        templateFile: "plop-templates/component/component.test.hbs",
      },
      {
        type: "add",
        path: "src/{{compType}}/{{pascalCase compName}}/index.tsx",
        templateFile: "plop-templates/component/component.index.hbs",
      },
      {
        type: "append",
        path: "src/{{compType}}/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{pascalCase compName}} } from './{{pascalCase compName}}'`,
      },
    ],
  });
}
