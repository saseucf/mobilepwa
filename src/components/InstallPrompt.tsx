"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InstallPrompt() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches

        if (isIOS && !isStandalone && !localStorage.getItem('pwaPromptShown')) {
            setIsVisible(true)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-20 left-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-4">
            <Card className="shadow-lg border-primary/20">
                <CardContent className="p-4 flex justify-between items-center gap-4">
                    <p className="text-sm leading-tight">
                        Tap the share button and then <span className="font-bold">"Add to Home Screen"</span> to install.
                    </p>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            setIsVisible(false)
                            localStorage.setItem('pwaPromptShown', 'true')
                        }}
                    >
                        ✕
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
