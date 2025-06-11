import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import {
  AIResponse,
  Text,
  Menu,
  PlaceholderParagraph,
  Card,
  CardHeader,
  CardBody,
  Button,
  SaraSparkle,
  Divider,
  LinkButton,
  ChipGroup,
  Textarea,
  Icon,
} from '@/index';
import './style.css';
import classNames from 'classnames';
// @ts-expect-error - Image import without proper type declaration
import Image from '../assets/media.png';

const meta: Meta<typeof AIResponse> = {
  title: 'Components/AI/AI Response',
  component: AIResponse,
  subcomponents: {
    'AIResponse.Button': AIResponse.Button,
    'AIResponse.ActionBar': AIResponse.ActionBar,
    'AIResponse.Body': AIResponse.Body,
  } as any,
  parameters: {
    docs: {
      page: null,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// All - Complete example with interactive buttons
export const All = () => {
  const [selectedList, setSelectedList] = React.useState({
    pin: false,
    like: false,
    dislike: false,
  });

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse showAvatar={true} metaData={metaDataRenderer}>
      <AIResponse.Body>
        <Text>Hello, would you like to book an appointment with your cardiologist?</Text>
      </AIResponse.Body>

      <AIResponse.ActionBar>
        <div className="d-flex">
          <AIResponse.Button
            icon="push_pin"
            className="mr-3"
            selected={selectedList.pin}
            onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
          >
            Pin
          </AIResponse.Button>
          <AIResponse.Button icon="content_copy" iconType="rounded">
            Copy
          </AIResponse.Button>
        </div>

        <div className="d-flex align-items-center">
          <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" />
          <AIResponse.Button
            icon="thumb_up"
            iconType="outlined"
            className="mr-3"
            tooltip="Good Response"
            selected={selectedList.like && !selectedList.dislike}
            onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
          />
          <AIResponse.Button
            icon="thumb_down"
            iconType="outlined"
            className="mr-3"
            tooltip="Bad Response"
            selected={selectedList.dislike && !selectedList.like}
            onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
          />

          <Menu trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
            <Menu.List>
              <Menu.Item>Share</Menu.Item>
              <Menu.Item>View source</Menu.Item>
              <Menu.Item>Report a problem</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </AIResponse.ActionBar>
    </AIResponse>
  );
};

// Basic - Simple story with args
export const Basic: Story = {
  args: {
    showAvatar: true,
    children: (
      <AIResponse.Body>
        <Text>Hello, would you like to book an appointment with your cardiologist?</Text>
      </AIResponse.Body>
    ),
  },
};

// With Avatar - Simple story with avatar enabled
export const WithAvatar: Story = {
  args: {
    showAvatar: true,
    children: (
      <AIResponse.Body>
        <Text>This is an AI response with avatar displayed.</Text>
      </AIResponse.Body>
    ),
  },
};

// Without Avatar - Simple story without avatar
export const WithoutAvatar: Story = {
  args: {
    showAvatar: false,
    children: (
      <AIResponse.Body>
        <Text>This is an AI response without avatar.</Text>
      </AIResponse.Body>
    ),
  },
};

// Custom Content - AIResponse with image content
export const CustomContent = () => {
  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse showAvatar={true} metaData={metaDataRenderer} className="w-50">
      <AIResponse.Body>
        <Text>
          Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
          sinusitis makes it hard for the sinuses to drain. Mucus builds up.
        </Text>
        <img alt="placeholder" src={Image} className="mt-4" />
      </AIResponse.Body>
    </AIResponse>
  );
};

// Generating Response - Loading state with placeholders
export const GeneratingResponse = () => {
  return (
    <AIResponse className="w-50">
      <PlaceholderParagraph length="large" />
      <PlaceholderParagraph length="medium" />
    </AIResponse>
  );
};

// Glow Effect - Shows comparison with and without glow
export const GlowEffect = () => {
  const showGlowValues = [true, false];

  return (
    <div className="d-flex justify-content-between">
      {showGlowValues.map((showGlow, index) => (
        <AIResponse showGlow={showGlow} key={index} className="w-50 mr-8">
          <AIResponse.Body>
            <Text>
              Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
              sinusitis makes it hard for the sinuses to drain. Mucus builds up.
            </Text>
          </AIResponse.Body>
        </AIResponse>
      ))}
    </div>
  );
};

// Giving Feedback - Complex feedback interaction story
export const GivingFeedback = () => {
  const [showComment, setShowComment] = React.useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [selectedChipList, setSelectedChipList] = React.useState([]);
  const [showClosingAnimation, setShowClosingAnimation] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState({
    like: false,
    dislike: false,
  });

  const positiveChipOptions = [
    { label: 'Accurate', name: '1', type: 'selection', selected: selectedChipList.includes('1') },
    { label: 'Appropriate', name: '2', type: 'selection', selected: selectedChipList.includes('2') },
    { label: 'Easy to understand', name: '3', type: 'selection', selected: selectedChipList.includes('3') },
  ];

  const negativeChipOptions = [
    { label: 'Inaccurate', name: '4', type: 'selection', selected: selectedChipList.includes('4') },
    { label: 'Inappropriate', name: '5', type: 'selection', selected: selectedChipList.includes('5') },
    { label: 'Offensive', name: '6', type: 'selection', selected: selectedChipList.includes('6') },
  ];

  React.useEffect(() => {
    if (!selectedList.like && !selectedList.dislike) {
      setShowComment(false);
    }
  }, [selectedList]);

  const handleChipSelection = (selectedChip) => {
    const name = selectedChip.name;
    if (selectedChipList.includes(name)) {
      const newList = selectedChipList.filter((chipName) => chipName !== name);
      setSelectedChipList(newList);
    } else {
      setSelectedChipList([...selectedChipList, name]);
    }
  };

  const onSubmitClick = () => {
    setIsFormSubmitted(true);
    setShowClosingAnimation(true);
  };

  const cardClassNames = classNames({
    ['mt-5 py-4 px-5']: true,
    ['feedback-form-animate--open']: showComment && !showClosingAnimation,
    ['feedback-form-animate--close']: showComment && showClosingAnimation,
  });

  const contentClassNames = classNames({
    ['feedback-content-animate--open']: showComment && !showClosingAnimation,
    ['feedback-content-animate--close']: showComment && showClosingAnimation,
  });

  const onAnimationEnd = () => {
    if (showClosingAnimation) {
      setShowComment(false);
      setShowClosingAnimation(false);
    }
  };

  return (
    <Card shadow="none" className="w-50 vh-100">
      <CardHeader className="d-flex justify-content-between align-items-center">
        <Text weight="strong" size="regular">
          Smart assist
        </Text>
        <Button appearance="transparent" aria-label="Close" icon="close" />
      </CardHeader>
      <Divider />
      <CardBody className="mt-6">
        <div className="d-flex">
          <SaraSparkle />
          <div className="ml-4">
            <Text weight="strong">Suggest available slots for follow-up appointment with the PCP</Text>

            <AIResponse className="mt-5">
              <AIResponse.Body>
                <Text>It looks like Dr.Smith is available next month on 5th November at 10am, 11am and 2pm EST.</Text>
              </AIResponse.Body>

              <AIResponse.ActionBar className="justify-content-end">
                <div className="d-flex align-items-center">
                  <AIResponse.Button
                    icon="sync"
                    className="mr-3"
                    tooltip="Regenerate"
                    onClick={() => {
                      setSelectedList({ ...selectedList, like: false, dislike: false });
                      setShowComment(false);
                      setIsFormSubmitted(false);
                    }}
                  />
                  <AIResponse.Button
                    icon="thumb_up"
                    iconType="outlined"
                    className="mr-3"
                    tooltip="Good Response"
                    selected={selectedList.like && !selectedList.dislike}
                    onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
                  />
                  <AIResponse.Button
                    icon="thumb_down"
                    iconType="outlined"
                    className="mr-3"
                    tooltip="Bad Response"
                    selected={selectedList.dislike && !selectedList.like}
                    onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
                  />

                  <Menu
                    trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}
                  >
                    <Menu.List>
                      <Menu.Item>Share</Menu.Item>
                      <Menu.Item>View source</Menu.Item>
                      <Menu.Item>Report a problem</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
              </AIResponse.ActionBar>
            </AIResponse>

            {(selectedList.like || selectedList.dislike) && !showComment && (
              <Card shadow="none" className="mt-5">
                <div className="d-flex justify-content-between py-4 px-5 align-items-center feedback-card-animate">
                  <Text weight="medium">Thanks for sharing your feedback</Text>
                  <div className="d-flex align-items-center">
                    {isFormSubmitted ? (
                      <Icon name="check_circle" size={16} appearance="success" />
                    ) : (
                      <LinkButton onClick={() => setShowComment(true)}>Tell us more</LinkButton>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {showComment && (selectedList.like || selectedList.dislike) && (
              <Card shadow="none" className={cardClassNames} onAnimationEnd={onAnimationEnd}>
                <div className={contentClassNames}>
                  <Text weight="medium">Tell us more</Text>
                  <div className="mt-7">
                    <ChipGroup
                      list={selectedList.like ? positiveChipOptions : negativeChipOptions}
                      onClick={handleChipSelection}
                    />

                    <Textarea
                      aria-labelledby="Textarea"
                      name="Textarea"
                      placeholder="Additional comments"
                      resize={false}
                      rows={3}
                      className="mt-5"
                    />

                    <div className="d-flex justify-content-end mt-6">
                      <Button className="mr-4" size="tiny" onClick={() => setShowClosingAnimation(true)}>
                        Skip
                      </Button>
                      <Button
                        appearance="primary"
                        size="tiny"
                        onClick={onSubmitClick}
                        disabled={selectedChipList.length <= 0}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

// Generating Content - Complex animated content generation
export const GeneratingContent = () => {
  const [loading, setLoading] = React.useState(true);
  const [visibleSentences, setVisibleSentences] = React.useState([]);
  const [showActionBar, setShowActionBar] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState({
    pin: false,
    like: false,
    dislike: false,
  });

  const sentences = [
    'Value-based care (VBC) is a healthcare delivery model in which providers, including hospitals and physicians, are paid based on patient health outcomes.',
    'This contrasts with the traditional fee-for-service model, where providers are paid based on the amount of healthcare services they deliver.',
    'The primary goal of VBC is to improve the quality of care provided to patients while reducing costs.',
  ];

  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        let delay = 0;
        sentences.forEach((sentence) => {
          setTimeout(() => {
            setVisibleSentences((prev) => [...prev, sentence]);
          }, delay);
          delay += 240;
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  React.useEffect(() => {
    if (visibleSentences.length === 3 && !loading) {
      setShowActionBar(true);
    }
  }, [visibleSentences]);

  const handleRegenerate = () => {
    setLoading(true);
    setShowActionBar(false);
    setVisibleSentences([]);
  };

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  const ChatMessage = () => {
    const ShowLoaders = () => {
      return (
        <div>
          <PlaceholderParagraph length="large" />
          <PlaceholderParagraph length="medium" />
        </div>
      );
    };

    return (
      <>
        {loading ? (
          <ShowLoaders />
        ) : (
          <div>
            {visibleSentences.map((sentence, index) => (
              <Text key={index} className="AIResponse-text">
                {sentence}
              </Text>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <AIResponse className="w-50" showAvatar={true} metaData={metaDataRenderer}>
      <AIResponse.Body>
        <ChatMessage />
      </AIResponse.Body>

      {showActionBar && (
        <AIResponse.ActionBar>
          <div className="d-flex">
            <AIResponse.Button
              icon="push_pin"
              className="mr-3"
              selected={selectedList.pin}
              onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
            >
              Pin
            </AIResponse.Button>
            <AIResponse.Button icon="content_copy" iconType="rounded">
              Copy
            </AIResponse.Button>
          </div>

          <div className="d-flex align-items-center">
            <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" onClick={handleRegenerate} />
            <AIResponse.Button
              icon="thumb_up"
              iconType="outlined"
              className="mr-3"
              tooltip="Good Response"
              selected={selectedList.like && !selectedList.dislike}
              onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
            />
            <AIResponse.Button
              icon="thumb_down"
              iconType="outlined"
              className="mr-3"
              tooltip="Bad Response"
              selected={selectedList.dislike && !selectedList.like}
              onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
            />

            <Menu trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
              <Menu.List>
                <Menu.Item>Share</Menu.Item>
                <Menu.Item>View source</Menu.Item>
                <Menu.Item>Report a problem</Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </AIResponse.ActionBar>
      )}
    </AIResponse>
  );
};
