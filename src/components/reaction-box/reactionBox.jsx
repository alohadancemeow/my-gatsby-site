import React from 'react'
import { Box } from 'theme-ui'
import { SvgBubbleSlider } from 'react-svg-bubble-slider';

export const RecationBox = ({ title, featuredImageUrl, tags, date, dateModified, excerpt, slug, pinned }) => {
    return (
        <Box
            sx={{
                '.svg-timeline': {
                    ':focus': {
                        outlineColor: 'mutedAccent',
                    },
                },
                '.speech-bubble-stroke': {
                    stroke: 'muted',
                },
                '.speech-bubble-fill': {
                    fill: 'background',
                },
                '.speech-bubble-text': {
                    fill: 'muted',
                    fontSize: '24px',
                    textTransform: 'capitalize',
                },
                '.speech-bubble-pop-line': {
                    stroke: 'muted',
                },
                '.reaction-icon': {
                    fill: 'background',
                },
                '.reaction-dot': {
                    fill: 'muted',
                },
                '.svg-bubble-action': {
                    minHeight: 2,
                },
            }}
        >
            <SvgBubbleSlider>
                {({ reaction }) => (
                    <div style={{
                        boxSizing: 'border-box',
                        minHeight: 48,
                        minWidth: 0,
                        paddingTop: 8,
                        margin: 0,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button
                            style={{
                                boxSizing: 'border-box',
                                margin: 0,
                                display: 'inline-block',
                                textAlign: 'center',
                                padding: '8px 16px',
                                margin: '0px',
                                textTransform: 'capitalize',
                                backgroundColor: 'rgb(131, 148, 202)',
                                textDecoration: 'none',
                                color: '#fff',
                                border: 0,
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                minWidth: '120px'

                            }}
                            //TODO: do somthing...
                            onClick={() => console.log(reaction)}
                        >
                            {reaction ? reaction : '?'}
                        </button>
                    </div>
                )}
            </SvgBubbleSlider>
        </Box>
    )
}
