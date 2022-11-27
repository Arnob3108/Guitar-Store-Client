import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Blogs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-amber-200">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Some</span>
              </span>{" "}
              React Development Queries
            </h2>
          </div>
          <div className="space-y-4">
            <Item title="What are the different ways to manage a state in a React application?">
              <h2 className="text-lg font-bold">1. React Component Props</h2>
              <p>
                This is the most basic way to manage state for your components,
                you simply pass the state via props. Of course things can get
                pretty complicated as you add more and more components that rely
                on the same shared state. For most use cases, this will probably
                be the best solution – it’s clean, simple, and keeps your
                components reusable. If your component is a “dumb” UI component,
                then it ideally should take in state as props and render it.
              </p>
              <h2 className="text-lg font-bold">2. React Context</h2>
              <p>
                React Context was added to React to help solve the problem of
                sharing state between multiple components, especially between
                ones that are not close in the component hierarchy. React
                Context is a great option because it is very straight forward to
                use and has native support, as it is part of React itself.
              </p>
              <h2 className="text-lg font-bold">3. Redux state management</h2>
              <p>
                Redux is a separate library that allows you to maintain a
                centralized store for your app’s shared state while also
                providing a unidirectional data flow for the state managed by
                your Redux store. There other libraries that achieve similar
                results (MobX, Relay + GraphQL, Jumpsuit), but Redux is the most
                popular one.
              </p>
            </Item>
            <Item title="How does prototypical inheritance work?">
              <li>
                Under the classical inheritance phenomenon, we create a new
                class that actually extends or reuses the properties or
                functions, or methods of another class that are used by several
                programming languages (like C, C++, Java, etc.)
              </li>
              <li>
                JavaScript doesn’t use classical inheritance instead it uses the
                phenomenon called Prototype Inheritance.
              </li>
              <li>
                In Prototype Inheritance, an object uses the properties or
                methods of another object via the prototype linkage.
              </li>
              <li>
                In Prototype Inheritance, an object uses the properties or
                methods of another object via the prototype linkage.
              </li>
            </Item>
            <Item title="What is a unit test? Why should we write unit tests?">
              <p>
                <span className=" font-bold">Unit Test</span>Unit tests are
                simple scripts that check whether a given unit—class, function,
                module, etc.—is working as expected. They are meant to be rather
                simple, to cover the happy path of the code plus a few edge
                cases. They contribute to the long-term success of a project
                because of the reasons I discuss below.
              </p>
              <h1 className=" font-bold">
                1. Unit Tests are Repeatable and it Makes Coding Agile
              </h1>
              <p>
                The best thing about the Unit tests is that they are repeatable.
                You write it once and you can run them a million times.
              </p>
              <h1 className=" font-bold">2. Detects Software Bugs Early</h1>
              <p>
                Imagine a scenario where you built some features in your
                application and after some check and manual testing it was
                deployed. You left your office but somewhere you might have been
                thinking about the application…
              </p>
              <h1 className=" font-bold">3. Improves the Quality of Code</h1>
              <p>
                A lot of bugs in software development occur due to the result of
                unforeseen edge cases. If you forget to predict a single input
                then later you may encounter a major bug in your application.
              </p>
              <h1 className=" font-bold">4. Provides Documentation</h1>
              <p>
                The unit test gives a basic idea of what the code does and all
                the different use cases are covered through the program. It
                makes documentation easier and this increases the readability
                and understandability of the code.
              </p>
              <h1 className=" font-bold">
                5. Easier Changes and Simplified Integrations
              </h1>
              <p>
                In software development most of the time you need to make
                changes to your code or you need to refactor the code. In
                refactoring you change the structure of your code without
                changing its behavior.
              </p>
            </Item>
            <Item title="React vs. Angular vs. Vue?">
              <h1 className=" text-lg font-bold">
                Comparison between React vs Angular vs Vue
              </h1>
              <li className=" font-bold">The number of downloads</li>
              <p>
                As is visible from the graph, React is the most downloaded
                framework of the three. These many downloads show the confidence
                of users in React. Vue comes second by a long distance,
                surpassing Angular.
              </p>
              <li className=" font-bold">Learning Curve</li>
              <p>
                The Learning curve is defined as the basic study you need to do
                before starting a framework. For Angular, the learning curve is
                steep because you need to learn about concepts like Model View
                Control(MWC). You need to know about TypeScript. It is necessary
                to know these concepts for advanced coding.
              </p>
              <li className=" font-bold">Framework Size</li>
              <p>
                When it comes to the framework, the size of the libraries
                becomes an important characteristic. This is because runtime
                depends on the size. Angular consists of the framework of the
                largest size at 500KB. React comes second at 100KB. Vue is the
                lightest at 80KB(Bundle size).
              </p>
              <li className=" font-bold">Community Support</li>
              <p>
                React and Angular has the largest community support because of
                the support from Facebook and Google respectively. They are
                regularly updated with one major update in six months. Vue, on
                the other hand, doesn’t have a huge community like React or
                Angular.
              </p>
              <li className=" font-bold">Languages used</li>
              <p>
                Coding on Angular is done through TypeScript whereas Vue and
                React work on Javascript.
              </p>
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
